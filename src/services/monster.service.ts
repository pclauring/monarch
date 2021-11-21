// src/items/monster.service.ts

/**
 * Data Model Interfaces
 */

import Monster from '../models/monster.model';
import { collections } from '../services/database.service';
import {
  ObjectId,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
  Document,
} from 'mongodb';
import { ParsedQs } from 'qs';

/**
 * Service Methods
 */

export const findAll = async (): Promise<Document[] | undefined> =>
  collections.monsters?.find({}).toArray();

export const find = async (id: string): Promise<Monster> => {
  const query = { _id: new ObjectId(id) };
  const monster = (await collections.monsters?.findOne(query)) as Monster;
  return monster;
};

export const query = async (
  query: ParsedQs
): Promise<Document[] | undefined> => {
  const monster = await collections.monsters?.find(query).toArray();
  return monster;
};

export const create = async (
  newMonster: Monster
): Promise<InsertOneResult<Document> | undefined> => {
  return collections.monsters?.insertOne(newMonster);
};

export const update = async (
  id: string,
  monster: Monster
): Promise<UpdateResult | undefined> => {
  const query = { _id: new ObjectId(id) };

  return await collections.monsters?.updateOne(query, {
    $set: monster,
  });
};

export const remove = async (id: string): Promise<DeleteResult | undefined> => {
  const query = { _id: new ObjectId(id) };
  return await collections.monsters?.deleteOne(query);
};
