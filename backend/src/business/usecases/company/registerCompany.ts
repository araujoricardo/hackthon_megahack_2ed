import { v4 } from "uuid"
import { Company } from "../../entities/company"
import { CompanyGateway } from "../../gateways/companyGateway"
import { BcryptGateway } from "../../gateways/bcryptGateway"
import { JWTAuthGateway } from "../../gateways/jwtAuthGateway"
// import { ConflictError } from "../../errors/conflictError"

export class RegisterCompanyUC {
  constructor(
    private db: CompanyGateway,
    private jwtAuth: JWTAuthGateway,
    private bcrypt: BcryptGateway
  ) { }

  public async execute(input: registerCompanyInput): Promise<registerCompanyOutput | undefined> {
    try {
      const id = v4();
      const company = await this.db.getCompanyByEmail(input.email)

      if (company) {
        // throw new ConflictError("Company already registered")
      }

      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newCompany = new Company(
        id,
        input.name,
        input.email,
        hashPassword,
        false
      )

      await this.db.registerCompany(newCompany);

      const token = this.jwtAuth.generateToken(id);

      return {
        message: "Company successfully registered",
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

export interface registerCompanyInput {
  name: string
  email: string
  password: string
}

export interface registerCompanyOutput {
  message: string
  token: string
}