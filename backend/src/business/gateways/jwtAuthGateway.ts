export interface JWTAuthGateway {
  generateToken(userId: string): string
  verifyToken(token: string): string
}