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
      const { username, password } = req.body;
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.json({ msg: "User not found" });
        else {
          res.json(req.user);
          next();
        }
      });
    });
  }
}
