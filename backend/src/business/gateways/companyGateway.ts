import { Company } from "../entities/company"

export interface CompanyGateway {
  registerCompany(company: Company): Promise<void>
  login(email: string): Promise<Company | undefined>
  getCompanyByEmail(email: string): Promise<Company | undefined>
  getUserById(id: string): Promise<Company | undefined>
  createUserFollowRelation(followerId: string, followedId: string): Promise<void>
  changePassword(newPassword: string, userId: string): Promise<void>
  changeEmail(newEmail: string, userId: string): Promise<void>
  changeName(newName: string, userId: string): Promise<void>
  updatePasswordTime(passwordTime: Date, userId: string): Promise<void>
}