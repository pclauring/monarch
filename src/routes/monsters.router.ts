/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as MonsterService from '../services/monsters.service';
import { BaseMonster, Monster } from '../models/monster.interface';

/**
 * Router Definition
 */

export const monstersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
monstersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const monsters: Monster[] = await MonsterService.findAll();

    res.status(200).send(monsters);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id
monstersRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const monster: Monster = await MonsterService.find(id);

    if (monster) {
      return res.status(200).send(monster);
    }

    res.status(404).send('monster not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items
monstersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const monster: BaseMonster = req.body;

    const newMonster = await MonsterService.create(monster);

    res.status(201).json(newMonster);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id
monstersRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const monsterUpdate: Monster = req.body;

    const existingMonster: Monster = await MonsterService.find(id);

    if (existingMonster) {
      const updatedMonster = await MonsterService.update(id, monsterUpdate);
      return res.status(200).json(updatedMonster);
    }

    const newMonster = await MonsterService.create(monsterUpdate);

    res.status(201).json(newMonster);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

monstersRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await MonsterService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
