import { Request, Response } from "express";
import * as MonsterService from "../services/monster.service";
import { IMonster } from "../types/monster.type";

export const getMonsterById = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = (await MonsterService.find(id)) as IMonster;

    if (monster) {
      res.status(200).send(monster);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const getMonsterByQueryParams = async (req: Request, res: Response) => {
  try {
    const monsters = (await MonsterService.query(req.query)) as IMonster[];

    if (monsters) {
      res.status(200).send(monsters);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
};

export const postMonster = async (req: Request, res: Response) => {
  try {
    const monster = await MonsterService.create(req.body as IMonster);

    monster
      ? res.status(201).send(monster)
      : res.status(500).send("Failed to create a new monster.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
};

export const putMonster = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await MonsterService.update(id, req.body as IMonster);
    monster
      ? res.status(200).send(monster)
      : res.status(304).send(`Monster with id: ${id} not updated`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteMonster = async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const monster = await MonsterService.remove(id);
    monster
      ? res.status(202).send(monster)
      : res.status(400).send(`Monster with id ${id} does not exist`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
