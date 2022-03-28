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
        <div>{monster.description}</div>
        <button onClick={() => updateMonster(monster)}>Add event</button>
        <button onClick={() => deleteMonster(monster._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Monster;
