import express from 'express'
import Routes from "./Routes";

class App {
  public app

  constructor() {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    this.app.use(new Routes().routes)
  }
}

export default new App().app