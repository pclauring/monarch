export default class Experience {
  constructor(
    public name: string,
    public createdDate: Date,
    public type: string,
    public description?: string
  ) {}
}
