import * as jwt from "jsonwebtoken"
import { JWTAuthGateway } from "../business/gateways/JwtAuthGateway"

export class JWTAuth implements JWTAuthGateway {
  private expiresIn = "1h"

  generateToken(userId: string): string {
    return jwt.sign({ userId }, process.env.SECRET_KEY as string, { expiresIn: this.expiresIn })
  }

  verifyToken(token: string): string {
    const data = jwt.verify(token, process.env.SECRET_KEY as string) as { userId: string }
    return data.userId
  }
}