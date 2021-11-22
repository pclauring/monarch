import { ObjectId } from 'mongodb';
import LifeEvent from './lifeEvent.model';

export default class Monster {
  constructor(
    public name: string,
    public level: number,
    public ownerId: string,
    public species: string,
    public spriteURL: string,
    public lifeEvents: LifeEvent[],
    public id?: ObjectId
  ) {}
}
