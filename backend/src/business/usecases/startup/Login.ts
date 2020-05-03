import { StartupGateway } from "../../gateways/StartupGateway"
import { BcryptGateway } from "../../gateways/BcryptGateway"
import { JWTAuthGateway } from "../../gateways/JwtAuthGateway"
import { NotFoundError } from "../../errors/NotFoundError"
import { UnauthorizedError } from "../../errors/UnauthorizedError"


export class LoginStartupUC {
  constructor(
    private db: StartupGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: LoginStartupUCInput): Promise<LoginStartupUCOutput | undefined> {
    try {
      const startup = await this.db.getStartupByEmail(input.email)

      if(!startup) {
        throw new NotFoundError('Startup not exist')
      }

      const checkPassword = await this.bcrypt.compareHash(input.password, startup.getPassword())

      if (!checkPassword) {
        throw new UnauthorizedError("Invalid email or password")
      }

      const token = this.jwtAuth.generateToken(startup.getId());

      return {
        message: "Startup successfully logged in",
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

export interface LoginStartupUCInput {
  email: string
  password: string
}

export interface LoginStartupUCOutput {
  message: string
  token: string
}