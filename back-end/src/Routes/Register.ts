import { Router } from "express";

export default class Register {
  public routes;

  constructor() {
    this.routes = Router();
    this.MountRoutes();
  }

  private MountRoutes() {
    this.routes.post("/", (req, res) => {
      console.log(req.body);
      res.json({
        message: "Register page!"
      });
    });
  }
}
