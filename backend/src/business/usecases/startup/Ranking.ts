import { FavoriteGateway } from "../../gateways/FavoriteGateway";
import { StartupResume } from "../../entities/StartupX";

export class RankingUC {
  constructor(
    private db: FavoriteGateway, 
  ) {}
  
  public async execute(): Promise<RankingUCOutput>{
    const ranking = await this.db.getStartupRank()

    return {
      ranking
    }
  }
}

export interface RankingUCOutput {
  ranking: StartupResume[]
}