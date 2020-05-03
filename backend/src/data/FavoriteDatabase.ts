import { BaseDatabase } from "./BaseDatabase";
import { StartupResume } from "../business/entities/Startup";
import { FavoriteGateway } from "../business/gateways/FavoriteGateway";



export class FavoriteDatabase extends BaseDatabase implements FavoriteGateway {
  private FavoriteTableName = "Favorite";

  public async FavoriteStartup(investorId: string, startupId: string): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.FavoriteTableName} (investorId, startupId) 
      VALUES(
        '${investorId}',
        '${startupId}'
      );
    `)
  }

  public async getStartupRank(): Promise<StartupResume[]> {
    const result = await this.connection.raw(`
      SELECT STARTUP.id, STARTUP.name, STARTUP.tags, count(${this.FavoriteTableName}.startupId) as votes
      FROM ${this.FavoriteTableName}
      JOIN STARTUP ON STARTUP.id = ${this.FavoriteTableName}.startupId
      GROUP BY ${this.FavoriteTableName}.startupId
      ORDER BY votes DESC
      LIMIT 5;
    `)

    return result[0]
  }
}