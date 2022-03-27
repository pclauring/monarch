import { ObjectId } from "mongodb";

export default class Monster {
  constructor(
    public name: string,
    public level: number,
    public ownerId: string,
    public species: string,
    public spriteURL: string,
    public id?: ObjectId
  ) {}
}
