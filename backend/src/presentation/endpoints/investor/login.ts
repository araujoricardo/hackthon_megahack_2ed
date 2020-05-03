import { Request, Response } from "express";
import { Bcrypt } from "../../../services/bcrypt";
import { JWTAuth } from "../../../services/jwtAuth"
import { InvestorDatabase } from "../../../data/InvestorDatabase";
import { LoginInvestorUC } from "../../../business/usecases/investor/Login";


export const loginInvestorEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new LoginInvestorUC(new InvestorDatabase(), new JWTAuth(), new Bcrypt());

    const result = await uc.execute({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  