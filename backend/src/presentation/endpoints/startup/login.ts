import { Request, Response } from "express";
import { StartupDatabase } from "../../../data/StartupDatabase";
import { JWTAuth } from "../../../services/JwtAuthX"
import { Bcrypt } from "../../../services/BcryptX"
import { LoginStartupUC } from "../../../business/usecases/startup/Login";

export const loginStartupEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new LoginStartupUC(new StartupDatabase(), new JWTAuth(), new Bcrypt());

    const result = await uc.execute({
      email: req.body.email,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  