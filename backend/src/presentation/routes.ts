import express from "express";
import { signupStartupEndpoint } from "./endpoints/startup/signup";


const app = express();
app.use(express.json()); 


app.post("/signup/startup", signupStartupEndpoint)

export default app;
