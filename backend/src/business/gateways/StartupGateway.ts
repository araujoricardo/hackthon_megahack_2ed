import { Startup } from "../entities/Startup"

export interface StartupGateway {
  createStartup(company: Startup): Promise<void>
  getStartupByEmail(email: string): Promise<Startup | undefined>
  getStartupById(id: string): Promise<Startup | undefined>
}