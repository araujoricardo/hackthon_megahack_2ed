import { StartupResume } from "../entities/Startup";

export interface FavoriteGateway {
  FavoriteStartup(investorId: string, startupId: string): Promise<void>
  getStartupRank(): Promise<StartupResume[]>
}