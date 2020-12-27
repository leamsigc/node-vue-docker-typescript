import jwt from "jsonwebtoken";
import passport from "passport";
import { Router } from "express";
import User from "../User/UserModel";

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
    this.routes.post("/", (req, res, next) => {
      passport.authenticate("local", async (err, user, info) => {
        if (err) throw err;
        if (!user)
          res.status(401).json({
            msg: "Please make sure that you have the right username or email"
          });
        else {
          let token = await jwt.sign(
            {
              data: {
                user: user._id,
                username: user.username
              }
            },
            // @ts-ignore
            process.env.JWT_SECRET,
            { expiresIn: "5h" }
          );

          res.json({
            token: token
          });
        }
      })(req, res, next);
    });
  }
}
