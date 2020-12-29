import { Router } from "express";
import createErrors from "http-errors";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken
} from "../Helpers/JWTHelpers";

export default class RefreshToken {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.post("/", async (req, res, next) => {
      try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw new createErrors.BadRequest();
        const userId = await verifyRefreshToken(refreshToken);

        const accessToken = await signAccessToken(userId);
        const refToken = await signRefreshToken(userId);
        res.send({ accessToken: accessToken, refreshToken: refToken });
      } catch (error) {
        next(error);
      }
    });
  }
}
