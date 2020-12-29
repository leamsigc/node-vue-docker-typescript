import createErrors from "http-errors";
import JWT from "jsonwebtoken";
import client from "./RedisInit";

const signAccessToken = async (user: any) => {
  try {
    //@ts-ignore
    const secret: string = process.env.JWT_SECRET;
    const options = { expiresIn: "15m", audience: `${user._id}` };
    const token = JWT.sign(
      {
        data: {
          user: user._id,
          username: user.username
        }
      },
      secret,
      options
    );
    return token;
  } catch (error) {
    return error;
  }
};
const signRefreshToken = async (user: any) => {
  try {
    //@ts-ignore
    const secret: string = process.env.JWT_REFRESH_TOKEN_SECRET;

    const options = { expiresIn: "1y", audience: `${user._id}` };
    const token = JWT.sign(
      {
        data: {
          user: `${user._id}`,
          username: user.username
        }
      },
      secret,
      options
    );
    const ONEYEAR = 365 * 24 * 60 * 60;

    client.SET(`${user._id}`, token, "EX", ONEYEAR, async (err, reply) => {
      if (err) {
        console.log(err.message);
        throw new createErrors.InternalServerError();
        return;
      }
    });

    return token;
  } catch (error) {
    new createErrors.InternalServerError();
  }
};

const verifyRefreshToken = async (tokenToCheck: string) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    const secret: string = process.env.JWT_REFRESH_TOKEN_SECRET;

    const verifyTokenStatus: any = JWT.verify(tokenToCheck, secret);

    const userId = verifyTokenStatus.aud;
    client.GET(userId, (err, result) => {
      if (err) {
        console.log(err.message);
        reject(new createErrors.InternalServerError());
        return;
      }
      if (tokenToCheck === result) {
        return resolve(userId);
      }
      reject(new createErrors.Unauthorized());
    });
  });
};
export { signAccessToken, signRefreshToken, verifyRefreshToken };
