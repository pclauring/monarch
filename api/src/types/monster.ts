import { Document } from 'mongoose';

export enum EventType {
  Training,
  Feeding,
  Mistake,
}

export interface IMonster extends Document {
  name: string;
  description: string;
  events: [
    {
      type: EventType;
    }
  ];
}
