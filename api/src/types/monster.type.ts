import { Document } from "mongoose";
import { TraitType, EventType } from "./enums";

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
