interface IMonster {
  _id: string;
  name: string;
  spriteURL: string;
  ownerId: string;
  events?: IEvent[];
  traits?: ITrait[];
  createdAt?: string;
  updatedAt?: string;
}

interface IEvent {
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ITrait {
  type: string;
  value: number;
}

interface MonsterProps {
  monster: IMonster;
}
