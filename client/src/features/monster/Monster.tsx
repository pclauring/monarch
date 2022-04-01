import React from "react";

interface MonsterProps {
  monster: IMonster;
}

type Props = MonsterProps & {
  updateMonster: (monster: IMonster) => void;
  deleteMonster: (_id: string) => void;
};
const Monster: React.FC<Props> = ({
  monster,
  updateMonster,
  deleteMonster,
}) => {
  return (
    <div>
      <div>
        <div>{monster._id}</div>
        <div>{monster.name}</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${monster.spriteURL}`}
          alt={monster.name}
        />
        {monster.events &&
          monster.events.map((event) => {
            return (
              <div key={event.createdAt}>
                {event.type}: {event.createdAt}
              </div>
            );
          })}
        {monster.traits &&
          monster.traits.map((trait) => {
            return (
              <div key={trait.type}>
                {trait.type}: {trait.value}
              </div>
            );
          })}
        <button onClick={() => updateMonster(monster)}>Add event</button>
        <button onClick={() => deleteMonster(monster._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Monster;
