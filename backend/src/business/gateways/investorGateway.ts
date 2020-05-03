import { Investor } from "../entities/Investor"

export interface InvestorGateway {
  createInvestor(investor: Investor): Promise<void>
  getInvestorByEmail(email: string): Promise<Investor | undefined>
  getInvestorById(id: string): Promise<Investor | undefined>
}