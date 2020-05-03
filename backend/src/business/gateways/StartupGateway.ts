import { Startup } from "../entities/StartupX"

export interface StartupGateway {
  createStartup(startup: Startup): Promise<void>
  getStartupByEmail(email: string): Promise<Startup | undefined>
  getStartupById(id: string): Promise<Startup | undefined>
}