import { ObjectId } from 'mongodb';
import Experience from './experience.model';

export default class Monster {
  constructor(
    public name: string,
    public level: number,
    public ownerId: string,
    public species: string,
    public spriteURL: string,
    public experiences: Experience[],
    public id?: ObjectId
  ) {}
}
