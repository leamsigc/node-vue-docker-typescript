import { Router } from "express";
import User from "../User/UserModel";
import jwt from "jsonwebtoken";

export default class Register {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.post("/", async (req, res) => {
      const { username, email, password } = req.body;
      let userExist = await User.findOne({ username });

      if (userExist) {
        return res.status(403).json({ msg: "That email is already in use." });
      }

      // @ts-ignore
      User.register(
        { username, email },
        password,
        async (err: any, createdUser: any) => {
          if (err) {
            return res
              .status(403)
              .json({ msg: "That email is already in use." });
          }

          const { username, email } = createdUser;
          const token = await this.genToken(createdUser);
          res.status(200).json({ username, email, token });
        }
      );
    });
  }

  async genToken(user: any) {
    return jwt.sign(
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
  }
}
