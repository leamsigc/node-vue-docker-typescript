import createErrors from "http-errors";
import JWT from "jsonwebtoken";

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

export { signAccessToken, signRefreshToken };
