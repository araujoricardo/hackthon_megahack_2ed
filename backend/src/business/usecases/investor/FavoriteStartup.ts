import { FavoriteGateway } from "../../gateways/FavoriteGateway";
import { JWTAuthGateway } from "../../gateways/JwtAuthGateway";
import { StartupGateway } from "../../gateways/StartupGateway";
import { NotFoundError } from "../../errors/NotFoundError";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { InvestorGateway } from "../../gateways/InvestorGateway";
import { BadRequestError } from "../../errors/BadRequestError";

export class FavoriteStartupUC {
  constructor(
    private favoritedb: FavoriteGateway, 
    private startupdb: StartupGateway,
    private investordb: InvestorGateway,
    private jwtAuth: JWTAuthGateway
  ) {}
  
  public async execute(input: FavoriteStartupUCInput): Promise<FavoriteStartupUCOutput>{
    if(input.token === undefined || input.token === '' || input.startupId === undefined || input.startupId === '') {
      throw new BadRequestError('Missing input')
    }

    const investorId = this.jwtAuth.verifyToken(input.token)

    const investor = this.investordb.getInvestorById(investorId)

    if(!investor) {
      throw new UnauthorizedError("Ivestor not exist")
    }

    const startup = await this.startupdb.getStartupById(input.startupId)

    if(!startup) {
      throw new NotFoundError('Startup not exist')
    }

    await this.favoritedb.FavoriteStartup(investorId, input.startupId)

    return {
      message: "Startup favorited successfully"
    }
  }
}

export interface FavoriteStartupUCInput {
  token: string,
  startupId: string
}

export interface FavoriteStartupUCOutput {
  message: string
}