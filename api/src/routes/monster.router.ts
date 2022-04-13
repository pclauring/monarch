// External Dependencies
import express, { Request, Response } from "express";
import * as MonsterService from "../services/monster.service";
import Monster from "../models/monster.model";
import { checkJwt } from "../middleware/auth.middleware";
import {
  getMonsterById,
  getMonsterByQueryParams,
  postMonster,
  putMonster,
  deleteMonster,
} from "../controllers/monster.controller";

// Global Config
export const monsterRouter = express.Router();

monsterRouter.use(express.json());

monsterRouter.get("/:id", getMonsterById);

monsterRouter.get("/", getMonsterByQueryParams);

monsterRouter.use(checkJwt);

monsterRouter.post("/", postMonster);

monsterRouter.put("/:id", putMonster);

monsterRouter.delete("/:id", deleteMonster);
