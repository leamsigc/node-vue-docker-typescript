import { Router } from "express";
import Register from "./Register";
import Login from "./Login";

export default class Routes {
  public routes;

  constructor() {
    require("../Authorization/Auth");
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.use("/register", new Register().routes);

    this.routes.use("/login", new Login().routes);
  }
}
