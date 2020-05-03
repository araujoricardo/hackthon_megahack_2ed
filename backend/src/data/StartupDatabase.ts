import { StartupGateway } from "../business/gateways/StartupGateway";
import { BaseDatabase } from "./BaseDatabase";
import { Startup } from "../business/entities/Startup";


export class StartupDatabase extends BaseDatabase implements StartupGateway {
  private startupTableName = "STARTUP";

  private mapDBDataToStartup(input: any): Startup {
    return new Startup(
      input.id,
      input.name,
      input.email,
      input.password,
      input.verifiedStatus,
      input.picture,
      input.location,
      input.tags, 
      input.summarizedProblem,
      input.summarizedProposal,
      input.video,
      input.initialInvestment,
      input.tagline,
      input.website,
      input.team,
      input.detailedProblem,
      input.detailedProposal,
      input.products,
      input.status
    )
  }

  public async createStartup(startup: Startup): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.startupTableName} ( id, name, email, password, verifiedStatus, picture, location, tags, summarizedProblem, summarizedProposal, video, initialInvestment, tagline, website, team, detailedProblem, detailedProposal, products, status) 
      VALUES(
        '${startup.getId()}',
        '${startup.getName()}',
        '${startup.getEmail()}',
        '${startup.getPassword()}',
        '${startup.getVerifiedStatus()}',
        '${startup.getPicture()}',
        '${startup.getLocation()}',
        '${startup.getTags()}',
        '${startup.getSummarizedProblem()}',
        '${startup.getSummarizedProposal()}',
        '${startup.getVideo()}',
        '${startup.getInitialInvestment()}',
        '${startup.getTagline()}',
        '${startup.getWebsite()}',
        '${startup.getTeam()}',
        '${startup.getDetailedProblem()}',
        '${startup.getDetailedProposal()}',
        '${startup.getProducts()}',
        '${startup.getStatus()}'
      );
    `)
  }

  public async getStartupByEmail(email: string): Promise<Startup | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.startupTableName}
      WHERE email = '${email}';
    `)

    return result[0][0] && this.mapDBDataToStartup(result[0][0])
  }

  public async getStartupById(id: string): Promise<Startup | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.startupTableName}
      WHERE id = '${id}';
    `)

    return result[0][0] && this.mapDBDataToStartup(result[0][0])
  }
}