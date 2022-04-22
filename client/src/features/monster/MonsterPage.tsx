import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getMonstersByOwnerAsync,
  selectMonsters,
  addMonster,
  removeMonster,
  updateMonster,
  createMonsterAsync,
  updateMonsterAsync,
  deleteMonsterAsync,
} from "./monsterSlice";
import Monster from "./Monster";
import CreateMonster from "./CreateMonster";
import PixelPanel from "../pixelator/PixelPanel";
import { MonsterService } from "../../services/MonsterService";

function MonsterPage() {
  const { user } = useAuth0();
  const dispatch = useAppDispatch();
  const reduxMonsters = useAppSelector(selectMonsters);
  const baseUrl: string = "http://localhost:7000";
  const monsterService = new MonsterService(
    baseUrl,
    process.env.REACT_APP_AUTH0_AUDIENCE
  );

  useEffect(() => {
    dispatch(getMonstersByOwnerAsync(user?.sub ? user?.sub : ""));
  }, []);

  const handleCreateMonster = (
    e: React.FormEvent,
    formData: IMonster
  ): void => {
    e.preventDefault();
    dispatch(createMonsterAsync(formData));
  };

  const handleAddTraining = (monster: IMonster): void => {
    dispatch(updateMonsterAsync(monster));
  };

  const handleDeleteMonster = (_id: string): void => {
    dispatch(deleteMonsterAsync(_id));
  };

  return (
    <div>
      {reduxMonsters.map((monster) => {
        return (
          <Monster
            key={monster._id}
            monster={monster}
            updateMonster={handleAddTraining}
            deleteMonster={handleDeleteMonster}
          />
        );
      })}
      <CreateMonster saveMonster={handleCreateMonster} />
      <PixelPanel height={16} width={16} color={"#67808b"} />
    </div>
  );
}

export default MonsterPage;
