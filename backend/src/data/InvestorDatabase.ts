import { InvestorGateway } from "../business/gateways/InvestorGateway";
import { BaseDatabase } from "./BaseDatabase";
import { Investor } from "../business/entities/Investor";


export class InvestorDatabase extends BaseDatabase implements InvestorGateway {
  private investorTableName = "INVESTOR";

  private mapDBDataToInvestor(input: any): Investor {
    return new Investor(
      input.id,
      input.name,
      input.email,
      input.password,
      input.picture,
      input.location,
      input.tags, 
      input.portfolio,
      input.likedCompanies 
    )
  }

  public async createInvestor(investor: Investor): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.investorTableName} (id, name, email, password, picture, location, tags, portfolio, likedCompanies) 
      VALUES(
        '${investor.getId()}',
        '${investor.getName()}',
        '${investor.getEmail()}',
        '${investor.getPassword()}',
        '${investor.getPicture()}',
        '${investor.getLocation()}',
        '${investor.getTags()}',
        '${investor.getPortfolio()}',
        '${investor.getLikedCompanies()}'
      );
    `)
  }

  public async getInvestorByEmail(email: string): Promise<Investor | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.investorTableName}
      WHERE email = '${email}';
    `)

    return result[0][0] && this.mapDBDataToInvestor(result[0][0])
  }

  public async getInvestorById(id: string): Promise<Investor | undefined> {
    const result = await this.connection.raw(`
      SELECT * 
      FROM ${this.investorTableName}
      WHERE id = '${id}';
    `)

    return result[0][0] && this.mapDBDataToInvestor(result[0][0])
  }
}