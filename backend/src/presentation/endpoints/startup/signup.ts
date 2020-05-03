import { Request, Response } from "express";
import { StartupDatabase } from "../../../data/StartupDatabase";
import { SignupStartupUC } from "../../../business/usecases/startup/Signup";
import { JWTAuth } from "../../../services/JwtAuth"
import { Bcrypt } from "../../../services/Bcrypt"

export const signupStartupEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new SignupStartupUC(new StartupDatabase(), new JWTAuth(), new Bcrypt());

    const result = await uc.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      picture: req.body.picture,
      location: req.body.location,
      tags: req.body.tags, 
      summarizedProblem: req.body.summarizedProblem,
      summarizedProposal: req.body.summarizedProposal,
      video: req.body.video,
      initialInvestment: req.body.initialInvestment,
      tagline: req.body.tagline,
      website: req.body.website,
      team: req.body.team,
      detailedProblem: req.body.detailedProblem,
      detailedProposal: req.body.detailedProposal,
      products: req.body.products,
      status: req.body.status
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  