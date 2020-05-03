import { v4 } from "uuid"
import { BcryptGateway } from "../../gateways/BcryptGatewayX"
import { JWTAuthGateway } from "../../gateways/JwtAuthGatewayX"
import { ConflictError } from "../../errors/ConflictError"
import { BadRequestError } from "../../errors/BadRequestError"
import { Investor } from "../../entities/InvestorX"
import { InvestorGateway } from "../../gateways/InvestorGatewayX"

export class SignupInvestorUC {
  constructor(
    private db: InvestorGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: SignupInvestorUCInput): Promise<SignupInvestorUCOutput> {
    try {
      if(!input.name || !input.email || !input.password) {
        throw new BadRequestError('Missing input error')
      }

      const id = v4();

      const startup = await this.db.getInvestorByEmail(input.email)

      if(startup) {
        throw new ConflictError('Investor already exist')
      }

      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newInvestor = new Investor(
        id,
        input.name,
        input.email,
        hashPassword,
        input.picture,
        input.location,
        input.tags, 
        input.portfolio,
        input.likedCompanies
      )

      await this.db.createInvestor(newInvestor);

      const token = this.jwtAuth.generateToken(id);

      return {
        message: "Investor successfully registered",
        token
      }

    } catch(err) {
      throw {
        code: err.statusCode || 400,
        message: err.message || "An error occurred during signup"
      }
    }
  }
}

export interface SignupInvestorUCInput {
  name: string;
  email: string;
  password: string;
  picture?: string;
  location?: string;
  tags?: string[];
  portfolio?: string[];
  likedCompanies?: string[];
}

export interface SignupInvestorUCOutput {
  message: string;
  token: string;
}