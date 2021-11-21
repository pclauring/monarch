import { ObjectId } from 'mongodb';

export default class Monster {
  constructor(
    public name: string,
    public level: number,
    public ownerId: string,
    public species: string,
    public spriteURL: string,
    public attack: number,
    public defense: number,
    public health: number,
    public mistakes: number,
    public battles: number,
    public id?: ObjectId
  ) {}
}
