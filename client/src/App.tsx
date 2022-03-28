import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import {
  getMonsters,
  createMonster,
  updateMonster,
  deleteMonster,
} from "./features/monster/monsterAPI";
import Monster from "./features/monster/Monster";
import CreateMonster from "./features/monster/CreateMonster";

function App() {
  const [monsters, setMonsters] = useState<IMonster[]>([]);

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = (): void => {
    getMonsters()
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
    createMonster(formData)
      .then(({ data }: IMonster | any) => {
        if (data._id === undefined) {
          throw new Error("Error! Monster not created");
        }
        setMonsters(monsters.concat(data));
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateMonster = (monster: IMonster): void => {
    updateMonster(monster)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Monster not updated");
        }
        //setMonsters(data.monsters)
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMonster = (_id: string): void => {
    deleteMonster(_id)
      .then(({ status, data }) => {
        if (status !== 202) {
          throw new Error("Error! Monster not deleted");
        }
        //setMonsters(data.monsters);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        {monsters.map((monster) => {
          return (
            <Monster
              key={monster._id}
              monster={monster}
              updateMonster={handleUpdateMonster}
              deleteMonster={handleDeleteMonster}
            />
          );
        })}
        <CreateMonster saveMonster={handleCreateMonster} />
      </header>
    </div>
  );
}

export default App;
