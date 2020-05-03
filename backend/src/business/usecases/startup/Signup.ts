import { v4 } from "uuid"
import { Startup } from "../../entities/StartupX"
import { StartupGateway } from "../../gateways/StartupGateway"
import { BcryptGateway } from "../../gateways/BcryptGatewayX"
import { JWTAuthGateway } from "../../gateways/JwtAuthGatewayX"
import { ConflictError } from "../../errors/ConflictError"
import { BadRequestError } from "../../errors/BadRequestError"

export class SignupStartupUC {
  constructor(
    private db: StartupGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: SignupStartupUCInput): Promise<SignupStartupUCOutput> {
    try {
      if(!input.name || !input.email || !input.password) {
        throw new BadRequestError('Missing input error')
      }

      const id = v4();

      const startup = await this.db.getStartupByEmail(input.email)

      if(startup) {
        throw new ConflictError('Startup already exist')
      }

      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newStartup = new Startup(
        id,
        input.name,
        input.email,
        hashPassword,
        false,
        input.picture,
        input.location,
        input.tags, 
        input.summarizedProblem,
        input.summarizedProposal,
        input.video,
        input.initialInvestment,
        input.tagline,
        input.website,
        input.team,
        input.detailedProblem,
        input.detailedProposal,
        input.products,
        input.status
      )

      await this.db.createStartup(newStartup);

      const token = this.jwtAuth.generateToken(id);

      return {
        message: "Startup successfully registered",
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

export interface SignupStartupUCInput {
  name: string;
  email: string;
  password: string;
  picture?: string;
  location?: string;
  tags?: string[];
  summarizedProblem?: string;
  summarizedProposal?: string;
  video?: string;
  initialInvestment?: number;
  tagline?: string;
  website?: string;
  team?: string[];
  detailedProblem?: string;
  detailedProposal?: string;
  products?: string;
  status?: string;
}

export interface SignupStartupUCOutput {
  message: string
  token: string
}