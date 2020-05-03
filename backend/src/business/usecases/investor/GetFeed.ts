import { StartupGateway } from "../../gateways/StartupGateway"
import { JWTAuthGateway } from "../../gateways/JwtAuthGateway"
import { BadRequestError } from "../../errors/BadRequestError"
import { Startup } from "../../entities/Startup"
import { InvestorGateway } from "../../gateways/InvestorGateway"
import { UnauthorizedError } from "../../errors/UnauthorizedError"

export class GetFeedUC {
  constructor(
    private startupdb: StartupGateway,
    private investordb: InvestorGateway,
    private jwtAuth: JWTAuthGateway
  ) { }

  public async execute(input: GetFeedUCInput): Promise<GetFeedUCOutput> {
    try {
      if (input === undefined || input.token === '') {
        throw new BadRequestError('Missing input')
      }

      const investorId = this.jwtAuth.verifyToken(input.token)

      const investor = this.investordb.getInvestorById(investorId)

      if (!investor) {
        throw new UnauthorizedError("Investor doesn't exist")
      }

      const feed = await this.startupdb.getFeed(investorId)

      return {
        feed
      }
    } catch (err) {
      throw {
        code: err.statusCode || 400,
        message: err.message || ""
      }
    }
  }
}

export interface GetFeedUCInput {
  token: string
}

export interface GetFeedUCOutput {
  feed: Startup[]
}