interface IMonster {
  _id: string;
  name: string;
  description: string;
  events?: MonsterEvent[];
  createdAt?: string;
  updatedAt?: string;
}

interface MonsterEvent {
  type: string;
}

interface MonsterProps {
  monster: IMonster;
}

type ApiDataType<TData> = {
  data: TData;
};
