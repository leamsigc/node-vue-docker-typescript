import mongoose from "mongoose";
import express from "express";
import Routes from "./Routes";
class App {
  public app;

  constructor() {
    this.app = express();
    this.setUp();
    this.mountRoutes();
  }

  private setUp(): void {
    mongoose.connect(
      process.env.DB_URL || "mongodb://localhost/app",
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
        }

        console.log("Connected to the db ");
      }
    );
    this.app.use(express.json());
  }

  private mountRoutes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello from the back end");
    });
    this.app.use(new Routes().routes);
  }
}

export default new App().app;
