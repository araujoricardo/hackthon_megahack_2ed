import { StartupResume } from "../entities/StartupX";

export interface FavoriteGateway {
  FavoriteStartup(investorId: string, startupId: string): Promise<void>
  getStartupRank(): Promise<StartupResume[]>
}