import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./Routes";
import Session from "express-session";
import CookieParser from "cookie-parser";
import passport from "passport";
import userModel from "./User/UserModel";
import passportJWTFun from "./Authorization/Auth";
const LOCALSTRATERGY = require("passport-local").Strategy;
import createErrors from "http-errors";

const corsOption: cors.CorsOptions = {
  origin: process.env.FRONT_END_URL,
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
    require("./Helpers/RedisInit");

    this.app.disable("x-powered-by");

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

    passportJWTFun(passport);
    // @ts-ignore
    passport.serializeUser(userModel.serializeUser());
    // @ts-ignore
    passport.deserializeUser(userModel.deserializeUser());
  }

  private mountRoutes(): void {
    this.app.get(
      "/",
      passport.authenticate("jwt", { session: false }),
      (req, res) => {
        res.send(req.user);
        // res.send("Protected route");
      }
    );

    /*----------  all the routes of our system  ----------*/
    this.app.use(new Routes().routes);

    /*----------  Error handler  ----------*/
    this.app.use((req, res, next) => {
      if (!req.user) return next(new createErrors.NotFound());
      next();
    });

    this.app.use(
      (
        err: { status: any; message: any },
        req: any,
        res: {
          status: (arg0: any) => void;
          send: (arg0: { error: { status: any; message: any } }) => void;
        },
        next: any
      ) => {
        res.status(err.status || 500);
        res.send({
          error: {
            status: err.status || 500,
            message: err.message
          }
        });
      }
    );
  }
}

export default new App().app;
