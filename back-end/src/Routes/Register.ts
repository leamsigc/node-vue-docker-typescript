import { Router } from "express";
import User from "../User/UserModel";
import createErrors from "http-errors";
import authSchema from "../Helpers/UserValidationSchema";
import { signAccessToken, signRefreshToken } from "../Helpers/JWTHelpers";

export default class Register {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.post("/", async (req, res, next) => {
      try {
        const result = await authSchema.validateAsync(req.body);
        let userExist = await User.findOne({ email: result.email });
        if (userExist) {
          throw new createErrors.Conflict(
            `Please provide a different username or email`
          );
        }

        // @ts-ignore
        User.register(
          { username: result.username, email: result.email },
          result.password,
          async (err: any, createdUser: any) => {
            if (err) {
              return next(err);
            }
            try {
              const { username, email, _id } = createdUser;
              const token = await signAccessToken(createdUser);
              const refreshToken = await signRefreshToken(createdUser);

              res.status(200).json({ id: _id, username, email, token });
            } catch (error) {
              next(error);
            }
          }
        );
      } catch (error) {
        if (error.isJoi === true) error.status = 422;
        next(error);
      }
    });
  }
}
