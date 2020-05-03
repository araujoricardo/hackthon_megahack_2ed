import { Request, Response } from "express";
import { FavoriteDatabase } from "../../../data/FavoriteDatabase";
import { RankingUC } from "../../../business/usecases/startup/Ranking";


export const rankingEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new RankingUC(new FavoriteDatabase());

    const result = await uc.execute();

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
}; 