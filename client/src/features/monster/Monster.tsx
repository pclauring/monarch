import React from "react";
type Props = MonsterProps & {
  monster: IMonster;
};
const Monster: React.FC<Props> = ({ monster }) => {
  return (
    <div>
      <div>
        <div>{monster._id}</div>
        <div>{monster.name}</div>
        <div>{monster.description}</div>
      </div>
    </div>
  );
};

export default Monster;
