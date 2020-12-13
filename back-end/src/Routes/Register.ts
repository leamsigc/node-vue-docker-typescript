import { Router } from 'express';

export default class Register {
  public routes;

  constructor() {
    this.routes = Router()
    this.MountRoutes()
  }

  private MountRoutes() {
    this.routes.get('/', (req, res) => {
      res.json({
        message: 'Register page!'
      })
    })
  }
}
