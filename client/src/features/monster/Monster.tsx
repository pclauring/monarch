import React from "react";
type Props = MonsterProps & {
  monster: IMonster;
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
        {monster.events &&
          monster.events.map((event) => {
            return (
              <div>
                {event.type}: {event.createdAt}
              </div>
            );
          })}
        {monster.traits &&
          monster.traits.map((trait) => {
            return (
              <div>
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
