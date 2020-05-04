import { Request, Response } from "express"
import { GetStartupDetailsUC } from "../../../business/usecases/investor/GetStartupDetails"
import { StartupDatabase } from "../../../data/StartupDatabase"
import { InvestorDatabase } from "../../../data/InvestorDatabase"
import { JWTAuth } from "../../../services/JwtAuth"


export const getStartupDetailsEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetStartupDetailsUC(new StartupDatabase(), new InvestorDatabase(), new JWTAuth())

    const result = await uc.execute({
      token: req.headers.token as string,
      startupId: req.body.startupId
    })

    res.status(200).send(result)
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    })
  }
}