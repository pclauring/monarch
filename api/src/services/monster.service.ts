// src/items/monster.service.ts

/**
 * Data Model Interfaces
 */

//import Monster from '../models/monster.model';
//import { collections } from '../services/database.service';
import { ObjectId, DeleteResult, Document } from "mongodb";
import { ParsedQs } from "qs";

import {
  IMonster,
  IEvent,
  ITrait,
  TraitType,
  EventType,
} from "../types/monster";
import Monster from "../models/monster";

/**
 * Service Methods
 */

export const findAll = async (): Promise<Document[] | undefined> => {
  const allMonsters: IMonster[] = await Monster.find();
  return allMonsters;
};

export const find = async (id: string): Promise<IMonster> => {
  const query = { _id: new ObjectId(id) };

  const monster = (await Monster.findOne(query)) as IMonster;
  return monster;
};

export const query = async (
  query: ParsedQs
): Promise<Document[] | undefined> => {
  const queryMonsters: IMonster[] = await Monster.find(query);
  return queryMonsters;
};

export const create = async (
  newMonster: IMonster
): Promise<IMonster | undefined> => {
  const monster: IMonster = new Monster({
    name: newMonster.name,
    spriteURL: "sprites/egg.png",
    traits: [
      { type: TraitType.Health, value: 0 },
      { type: TraitType.Defense, value: 0 },
      { type: TraitType.Power, value: 0 },
      { type: TraitType.Intellegence, value: 0 },
      { type: TraitType.Speed, value: 0 },
      { type: TraitType.Skill, value: 0 },
    ],
    events: [{ type: EventType.Created }],
  });
  newMonster = await monster.save();
  return newMonster;
};

export const update = async (
  id: string,
  monster: IMonster
): Promise<IMonster | undefined | null> => {
  const query = { _id: id };

  const updateMonster: IMonster | undefined | null =
    await Monster.findByIdAndUpdate(query, monster, {
      returnDocument: "after",
    });

  return updateMonster;
};

export const remove = async (
  id: string
): Promise<IMonster | null | undefined> => {
  return Monster.findByIdAndRemove(id);
};
