import { BcryptGateway } from "../../gateways/BcryptGateway"
import { JWTAuthGateway } from "../../gateways/JwtAuthGateway"
import { NotFoundError } from "../../errors/NotFoundError"
import { UnauthorizedError } from "../../errors/UnauthorizedError"
import { InvestorGateway } from "../../gateways/InvestorGateway"


export class LoginInvestorUC {
  constructor(
    private db: InvestorGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: LoginInvestorUCInput): Promise<LoginInvestorUCOutput | undefined> {
    try {
      const startup = await this.db.getInvestorByEmail(input.email)

      if(!startup) {
        throw new NotFoundError('Investor not exist')
      }

      const checkPassword = await this.bcrypt.compareHash(input.password, startup.getPassword())

      if (!checkPassword) {
        throw new UnauthorizedError("Invalid email or password")
      }

      const token = this.jwtAuth.generateToken(startup.getId());

      return {
        message: "Investor successfully logged in",
        token: token
      };
    } catch (err) {
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during login'
      }
    }
  }
}

export interface LoginInvestorUCInput {
  email: string
  password: string
}

export interface LoginInvestorUCOutput {
  message: string
  token: string
}