import { CompanyGateway } from "../../gateways/StartupGateway";
import { BcryptGateway } from "../../gateways/BcryptGateway";
import { JWTAuthGateway } from "../../gateways/JwtAuthGateway";
// import { NotFoundError } from "../../errors/notFoundError";
// import { UnauthorizedError } from "../../errors/unauthorizedError";


export class LoginUC {
  constructor(
    private db: CompanyGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: LoginUCInput): Promise<LoginUCOutput | undefined> {
    try {

      const company = await this.db.getCompanyByEmail(input.email)

      if (!company) {
        throw new NotFoundError("Unregistered company")
      }

      const checkPassword = await this.bcrypt.compareHash(input.password, company.getPassword())

      if (!checkPassword) {
        // throw new UnauthorizedError("Invalid email or password")
      }

      const token = this.jwtAuth.generateToken(company.getId());

      return {
        message: "Company successfully logged in",
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

export interface LoginUCInput {
  email: string
  password: string
}

export interface LoginUCOutput {
  message: string
  token: string
}