import { Investor } from "../entities/investor"

export interface InvestorGateway {
  registerInvestor(investor: Investor): Promise<void>
  login(email: string): Promise<Investor | undefined>
  getInvestorByEmail(email: string): Promise<Investor | undefined>
  getUserById(id: string): Promise<Investor | undefined>
  createUserFollowRelation(followerId: string, followedId: string): Promise<void>
  changePassword(newPassword: string, userId: string): Promise<void>
  changeEmail(newEmail: string, userId: string): Promise<void>
  changeName(newName: string, userId: string): Promise<void>
  updatePasswordTime(passwordTime: Date, userId: string): Promise<void>
}