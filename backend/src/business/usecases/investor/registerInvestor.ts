import { v4 } from "uuid"
import { Investor } from "../../entities/investor"
import { InvestorGateway } from "../../gateways/investorGateway"
import { BcryptGateway } from "../../gateways/bcryptGateway"
import { JWTAuthGateway } from "../../gateways/jwtAuthGateway"
// import { ConflictError } from "../../errors/conflictError"

export class RegisterInvestorUC {
  constructor(
    private db: InvestorGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: registerInvestorInput): Promise<registerInvestorOutput | undefined> {
    try {
      const id = v4();
      const investor = await this.db.getInvestorByEmail(input.email)

      if (investor) {
        // throw new ConflictError("Investor already registered")
      }

      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newInvestor = new Investor(
        id,
        input.name,
        input.email,
        hashPassword
      )

      await this.db.registerInvestor(newInvestor);

      const token = this.jwtAuth.generateToken(id);

      return {
        message: "Investor successfully registered",
        token
      }

    } catch (err) {
      throw {
        code: err.statusCode || 400,
        message: err.message || ""
      }
    }
  }
}

export interface registerInvestorInput {
  name: string
  email: string
  password: string
}

export interface registerInvestorOutput {
  message: string
  token: string
}