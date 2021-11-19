import { ObjectId } from 'mongodb';

export default class Monster {
  constructor(
    public name: string,
    public level: number,
    public ownerId: string,
    public id?: ObjectId
  ) {}
}
