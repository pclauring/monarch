import { Document } from "mongoose";

export enum EventType {
  Created = "Created",
  Training = "Training",
  Feeding = "Feeding",
  Mistake = "Mistake",
}

export enum TraitType {
  Health = "Health",
  Power = "Power",
  Intellegence = "Intellegence",
  Skill = "Skill",
  Speed = "Speed",
  Defense = "Defense",
}

export interface ITrait {
  type: TraitType;
  value: number;
}

export interface IEvent {
  type: EventType;
}

export interface IMonster extends Document {
  name: string;
  // ownerId: string;
  spriteURL: string;
  traits: ITrait[];
  events: IEvent[];
}
