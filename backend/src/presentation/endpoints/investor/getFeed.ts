import { Request, Response } from "express"
import { GetFeedUC } from "../../../business/usecases/investor/GetFeed"
import { StartupDatabase } from "../../../data/StartupDatabase"
import { InvestorDatabase } from "../../../data/InvestorDatabase"
import { JWTAuth } from "../../../services/JwtAuth"


export const getFeedEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetFeedUC(new StartupDatabase(), new InvestorDatabase(), new JWTAuth())

    const result = await uc.execute({
      token: req.body.token
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    })
  }
}