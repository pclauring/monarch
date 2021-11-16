// src/items/monsters.service.ts

/**
 * Data Model Interfaces
 */

import { BaseMonster, Monster } from '../models/monster.interface';
import { Monsters } from '../models/monsters.interface';

/**
 * In-Memory Store
 */

let monsters: Monsters = {
  1: {
    id: 1,
    name: 'One',
  },
  2: {
    id: 2,
    name: 'Two',
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Monster[]> => Object.values(monsters);

export const find = async (id: number): Promise<Monster> => monsters[id];

export const create = async (newMonster: BaseMonster): Promise<Monster> => {
  const id = new Date().valueOf();

  monsters[id] = {
    id,
    ...newMonster,
  };

  return monsters[id];
};

export const update = async (
  id: number,
  monsterUpdate: BaseMonster
): Promise<Monster | null> => {
  const monster = await find(id);

  if (!monster) {
    return null;
  }

  monsters[id] = { id, ...monsterUpdate };

  return monsters[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const monster = await find(id);

  if (!monster) {
    return null;
  }

  delete monsters[id];
};
