import { JWTAuthGateway } from "../../gateways/JwtAuthGateway"
import { StartupGateway } from "../../gateways/StartupGateway"
import { NotFoundError } from "../../errors/NotFoundError"
import { UnauthorizedError } from "../../errors/UnauthorizedError"
import { InvestorGateway } from "../../gateways/InvestorGateway"
import { BadRequestError } from "../../errors/BadRequestError"
import { Startup } from "../../entities/Startup"

export class GetStartupDetailsUC {
  constructor(
    private startupdb: StartupGateway,
    private investordb: InvestorGateway,
    private jwtAuth: JWTAuthGateway
  ) { }

  public async execute(input: GetStartupDetailsUCInput): Promise<GetStartupDetailsUCOutput | undefined> {
    try {
      if (input.token === undefined || input.token === "" || input.startupId === undefined || input.startupId === "") {
        throw new BadRequestError("Missing input")
      }

      const investorId = this.jwtAuth.verifyToken(input.token)

      const investor = this.investordb.getInvestorById(investorId)

      if (!investor) {
        throw new UnauthorizedError("Investor doesn't exist")
      }

      const startup = await this.startupdb.getStartupById(input.startupId)

      if (!startup) {
        throw new NotFoundError("Startup doesn't exist")
      }

      const startupDetails = await this.startupdb.GetStartupDetails(investorId, input.startupId)

      if (!startupDetails) {
        throw new NotFoundError("Startup not found")
      }

      return {
        startupDetails
      }
    } catch (err) {
      throw {
        code: err.statusCode || 400,
        message: err.message
      }
    }
  }
}

export interface GetStartupDetailsUCInput {
  token: string,
  startupId: string
}

export interface GetStartupDetailsUCOutput {
  startupDetails: Startup
}