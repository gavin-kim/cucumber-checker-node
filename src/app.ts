import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";


dotenv.config({ path: "./env/.env.cucumber" });

// Controllers (route handlers)
import * as homeController from "./controller/home";
import * as apiController from "./controller/api";
import { CucumberController } from "./controller/api/cucumber.controller"

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

/**
 * API
 */
app.get("/api", apiController.getApi);

const cucumberController = new CucumberController();
app.get("/api/cucumber/failedScenarios", cucumberController.getFailedScenarios);

export default app;