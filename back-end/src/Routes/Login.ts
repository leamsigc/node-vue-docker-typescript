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
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.status(401).json({ msg: "User not found" });
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.json(req.user);
            console.log(req.user);
          });
        }
      })(req, res, next);
    });
  }
}
