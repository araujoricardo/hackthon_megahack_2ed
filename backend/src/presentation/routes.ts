import express from "express";
import { signupStartupEndpoint } from "./endpoints/startup/signup";
import { loginStartupEndpoint } from "./endpoints/startup/login";


const app = express();
app.use(express.json()); 


app.post("/signup/startup", signupStartupEndpoint)
app.post("/login/startup", loginStartupEndpoint)

export default app;
