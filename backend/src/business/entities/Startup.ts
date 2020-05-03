export class Startup {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private verifiedStatus: boolean,
    private picture?: string,
    private location?: string,
    private tags?: string[],
    private summarizedProblem?: string,
    private summarizedProposal?: string,
    private video?: string,
    private initialInvestment?: number,
    private tagline?: string,
    private website?: string,
    private team?: string[],
    private detailedProblem?: string,
    private detailedProposal?: string,
    private products?: string,
    private status?: string
  ) {}

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

  public getVerifiedStatus(): boolean {
    return this.verifiedStatus
  }

  public setVerifiedStatus(verifiedStatus: boolean): void {
    this.verifiedStatus = verifiedStatus
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

  public getSummarizedProblem(): string | undefined {
    return this.summarizedProblem
  }

  public setSummarizedProblem(summarizedProblem: string): void {
    this.summarizedProblem = summarizedProblem
  }

  public getSummarizedProposal(): string | undefined {
    return this.summarizedProposal
  }

  public setSummarizedProposal(summarizedProposal: string): void {
    this.summarizedProposal = summarizedProposal
  }

  public getVideo(): string | undefined {
    return this.video
  }

  public setVideo(video: string): void {
    this.video = video
  }

  public getInitialInvestment(): number | undefined {
    return this.initialInvestment
  }

  public setInitialInvestment(initialInvestment: number): void {
    this.initialInvestment = initialInvestment
  }


  public getTagline(): string | undefined {
    return this.tagline
  }

  public setTagline(tagline: string): void {
    this.tagline = tagline
  }

  public getWebsite(): string | undefined {
    return this.website
  }

  public setWebsite(website: string): void {
    this.website = website
  }

  public getTeam(): string[] | undefined {
    return this.team
  }

  public setTeam(team: string[]): void {
    this.team = team
  }

  public getDetailedProblem(): string | undefined {
    return this.detailedProblem
  }

  public setDetailedProblem(detailedProblem: string): void {
    this.detailedProblem = detailedProblem
  }

  public getDetailedProposal(): string | undefined {
    return this.detailedProposal
  }

  public setDetailedProposal(detailedProposal: string): void {
    this.detailedProposal = detailedProposal
  }

  public getProducts(): string | undefined {
    return this.products
  }

  public setProducts(products: string): void {
    this.products = products
  }

  public getStatus(): string | undefined {
    return this.status
  }

  public setStatus(status: string): void {
    this.status = status
  }
}


export class StartupResume {
  constructor(
    private id: string,
    private name: string,
    private tags: string,
    private votes: string
  ) {}

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

  public getTags(): string {
    return this.tags
  }

  public setTags(tags: string): void {
    this.tags = tags
  }

  public getVotes(): string {
    return this.votes
  }

  public setVotes(votes: string): void {
    this.votes = votes
  }
}