import express from 'express'
import Routes from "./Routes";
class App {
  public app

  constructor() {
    this.app = express()
    this.setUp()
    this.mountRoutes()
  }

  private setUp(): void {
    this.app.use(express.json())
  }

  private mountRoutes(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello from the back end');
    });
    this.app.use(new Routes().routes)
  }
}

export default new App().app