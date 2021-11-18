// External Dependencies
import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Monster from '../models/monster.model';

// Global Config
export const monsterRouter = express.Router();

monsterRouter.use(express.json());

// GET
monsterRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const monsters = (await collections.monsters
      ?.find({})
      .toArray()) as Monster[];

    res.status(200).send(monsters);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

monsterRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const monster = (await collections.monsters?.findOne(query)) as Monster;

    if (monster) {
      res.status(200).send(monster);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST
monsterRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newMonster = req.body as Monster;
    const result = await collections.monsters?.insertOne(newMonster);

    result
      ? res
          .status(201)
          .send(`Successfully created a new game with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new game.');
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

// PUT
monsterRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updatedMonster: Monster = req.body as Monster;
    const query = { _id: new ObjectId(id) };

    const result = await collections.monsters?.updateOne(query, {
      $set: updatedMonster,
    });

    result
      ? res.status(200).send(`Successfully updated monster with id ${id}`)
      : res.status(304).send(`Game with id: ${id} not updated`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

// DELETE
monsterRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.monsters?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed monster with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove monster with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Monster with id ${id} does not exist`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
