import { Request, Response } from "express";
import { Bcrypt } from "../../../services/Bcrypt";
import { JWTAuth } from "../../../services/JwtAuth"
import { SignupInvestorUC } from "../../../business/usecases/investor/Signup";
import { InvestorDatabase } from "../../../data/InvestorDatabase";


export const signupInvestorEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new SignupInvestorUC(new InvestorDatabase(), new JWTAuth(), new Bcrypt());

    const result = await uc.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      picture: req.body.picture,
      location: req.body.location,
      tags: req.body.tags,
      portfolio: req.body.portfolio,
      likedCompanies: req.body.likedCompanies
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  