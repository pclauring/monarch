import React, { useEffect, useState } from "react";
import Monster from "./Monster";
import CreateMonster from "./CreateMonster";
import PixelPanel from "../pixelator/PixelPanel";
import { MonsterService } from "../../services/MonsterService";

function MonsterPageWithState() {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const baseUrl: string = "http://localhost:7000";
  const monsterService = new MonsterService(
    baseUrl,
    process.env.REACT_APP_AUTH0_AUDIENCE
  );

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = (): void => {
    monsterService
      .getMonster()
      .then(({ data }: IMonster[] | any) => {
        setMonsters(data);
      })
      .catch((err: Error) => console.log(err));
  };

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
        setMonsters(monsters.concat(data));
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
        setMonsters(
          monsters.map((monster) =>
            monster._id === response.data._id ? response.data : monster
          )
        );
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
        setMonsters(
          monsters.filter((monster) => monster._id !== response.data._id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {monsters.map((monster) => {
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

export default MonsterPageWithState;
