import express from "express";
import cors from "cors";
import { signupStartupEndpoint } from "./endpoints/startup/signup";
import { loginStartupEndpoint } from "./endpoints/startup/login";
import { signupInvestorEndpoint } from "./endpoints/investor/signup";
import { loginInvestorEndpoint } from "./endpoints/investor/login";
import { rankingEndpoint } from "./endpoints/startup/ranking";
import { favoriteStartupEndpoint } from "./endpoints/investor/favoriteStartup";
import { getFeedEndpoint } from "./endpoints/investor/getFeed";
import { getStartupDetailsEndpoint } from "./endpoints/investor/getStartupDetails";


const app = express();
app.use(express.json());
app.use(cors());


app.post("/signup/startup", signupStartupEndpoint)
app.post("/login/startup", loginStartupEndpoint)
app.get("/ranking", rankingEndpoint)

app.post("/signup/investor", signupInvestorEndpoint)
app.post("/login/investor", loginInvestorEndpoint)
app.post("/favorite", favoriteStartupEndpoint)
app.get("/feed", getFeedEndpoint)
app.post("/details", getStartupDetailsEndpoint)

export default app;
