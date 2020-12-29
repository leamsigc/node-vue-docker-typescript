import passport from "passport";
import { Router } from "express";
import { logInSchemaVal } from "../Helpers/UserValidationSchema";
import createErrors from "http-errors";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken
} from "../Helpers/JWTHelpers";
import client from "../Helpers/RedisInit";
export default class Login {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.get("/", (req, res) => {
      res.status(403).json({ msg: "Please login" });
    });
    this.routes.post("/login", async (req, res, next) => {
      try {
        await logInSchemaVal.validateAsync(req.body);

        passport.authenticate("local", async (err, user, info) => {
          if (err) throw new createErrors.InternalServerError();
          if (!user)
            next(new createErrors.NotFound("Invalid Username/Password"));
          else {
            const { username, email, _id } = user;
            const token = await signAccessToken(user);
            const refreshToken = await signRefreshToken(user);

            res
              .status(200)
              .json({ id: _id, username, email, token, refreshToken });
          }
        })(req, res, next);
      } catch (error) {
        if (error.isJoi === true)
          return next(new createErrors.BadRequest("Invalid Username/Password"));
        throw new createErrors.InternalServerError();
      }
    });
    this.routes.post("/logout", async (req, res, next) => {
      try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw new createErrors.BadRequest();
        const userId: any = await verifyRefreshToken(refreshToken);

        client.DEL(userId, (err, val) => {
          if (err) {
            throw new createErrors.InternalServerError();
          }
          console.log(val);
          res.sendStatus(200);
        });
      } catch (error) {
        next(error);
      }
    });
  }
}
