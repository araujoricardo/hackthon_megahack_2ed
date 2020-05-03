import { Startup } from "../entities/Startup"

export interface StartupGateway {
  createStartup(startup: Startup): Promise<void>
  getStartupByEmail(email: string): Promise<Startup | undefined>
  getStartupById(id: string): Promise<Startup | undefined>
  getFeed(id: string): Promise<Startup[]>
  GetStartupDetails(investorId: string, startupId: string): Promise<Startup | undefined>
}