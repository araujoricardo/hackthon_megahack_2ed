export class Investor {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private picture?: string,
    private location?: string,
    private tags?: string[],
    private portfolio?: string[],
    private likedCompanies?: string[]
  ) { }

  public getId(): string {
    return this.id
  }

  public setId(id: string): void {
    this.id = id
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getEmail(): string {
    return this.email
  }

  public setEmail(email: string): void {
    this.email = email
  }

  public getPassword(): string {
    return this.password
  }

  public setPassword(password: string): void {
    this.password = password
  }

  public getPicture(): string | undefined {
    return this.picture
  }

  public setPicture(picture: string): void {
    this.picture = picture
  }

  public getLocation(): string | undefined {
    return this.location
  }

  public setLocation(location: string): void {
    this.location = location
  }

  public getTags(): string[] | undefined {
    return this.tags
  }

  public setTags(tags: string[]): void {
    this.tags = tags
  }

  public getPortfolio(): string[] | undefined {
    return this.portfolio
  }

  public setPortfolio(portfolio: string[]): void {
    this.portfolio = portfolio
  }

  public getLikedCompanies(): string[] | undefined {
    return this.likedCompanies
  }

  public setLikedCompanies(likedCompanies: string[]): void {
    this.likedCompanies = likedCompanies
  }
}