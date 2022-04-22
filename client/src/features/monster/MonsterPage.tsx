import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getMonstersAsync,
  selectMonsters,
  addMonster,
  removeMonster,
  updateMonster,
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
    dispatch(getMonstersAsync(user?.sub ? user?.sub : ""));
  }, []);

  const handleCreateMonster = (
    e: React.FormEvent,
    formData: IMonster
  ): void => {
    e.preventDefault();
    monsterService
      .createMonster(formData)
      .then(({ data }: IMonster | any) => {
        if (data._id === undefined) {
          throw new Error("Error! Monster not created");
        }
        dispatch(addMonster(data));
      })
      .catch((err) => console.log(err));
  };

  const handleAddTraining = (monster: IMonster): void => {
    monsterService
      .addTraining(monster)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error! Monster not updated");
        }
        dispatch(updateMonster(response.data));
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMonster = (_id: string): void => {
    monsterService
      .deleteMonster(_id)
      .then((response) => {
        if (response.status !== 202) {
          throw new Error("Error! Monster not deleted");
        }
        dispatch(removeMonster(response.data));
      })
      .catch((err) => console.log(err));
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
