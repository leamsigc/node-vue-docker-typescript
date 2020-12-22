import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./Routes";
import Session from "express-session";
import CookieParser from "cookie-parser";
import passport from "passport";
import userModel from "./User/UserModel";
// import { Strategy } from "passport-local";
const LOCALSTRATERGY = require("passport-local").Strategy;
const corsOption: cors.CorsOptions = {
  origin: "http://localhost:8005",
  optionsSuccessStatus: 200,
  credentials: true
};
dotenv.config();
class App {
  public app;

  constructor() {
    this.app = express();
    this.setUp();
    this.mountRoutes();
  }

  private setUp(): void {
    console.log(process.env.DB_URL);
    mongoose.connect(
      // @ts-ignore
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Connected to the db ");
      }
    );
    //@ts-ignore
    this.app.use(cors(corsOption));

    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());

    this.app.use(
      Session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET as string
      })
    );
    this.app.use(CookieParser(process.env.SESSION_SECRET));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    // @ts-ignore
    passport.use(new LOCALSTRATERGY(userModel.authenticate()));
    // @ts-ignore
    passport.serializeUser(userModel.serializeUser());
    // @ts-ignore
    passport.deserializeUser(userModel.deserializeUser());
  }

  private mountRoutes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello from the back end");
    });
    this.app.use(new Routes().routes);
  }
}

export default new App().app;
