import { Request, Response } from "express";
import { Bcrypt } from "../../../services/bcrypt";
import { JWTAuth } from "../../../services/jwtAuth"
import { FavoriteStartupUC } from "../../../business/usecases/investor/FavoriteStartup";
import { FavoriteDatabase } from "../../../data/FavoriteDatabase";
import { StartupDatabase } from "../../../data/StartupDatabase";
import { InvestorDatabase } from "../../../data/InvestorDatabase";


export const favoriteStartupEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new FavoriteStartupUC(new FavoriteDatabase(), new StartupDatabase(), new InvestorDatabase(), new JWTAuth());

    const result = await uc.execute({
      token: req.body.token,
      startupId: req.body.startupId
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  