import { Router } from "express";
import User from "../User/UserModel";

export default class Register {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.post("/", (req, res) => {
      const { username, email, password } = req.body;

      User.findOne({ email }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
          return res.status(204).json({ msg: "That email is already in use." });
        }

        //@ts-ignore
        User.register(
          { username, email },
          password,
          async (err: any, createdUser: any) => {
            if (err) throw err;
            const { username, email } = createdUser;
            res.json({ username, email });
          }
        );
      });
    });
  }
}
