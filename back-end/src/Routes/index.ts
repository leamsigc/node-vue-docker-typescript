import { Router } from "express";
import Register from "./Register";
import Login from "./Login";
import RefreshToken from "./RefreshToken";

export default class Routes {
  public routes;

  constructor() {
    require("../Authorization/Auth");
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.use("/register", new Register().routes);
    this.routes.use("/auth", new Login().routes);
    this.routes.post("/refresh-token", new RefreshToken().routes);
  }
}
