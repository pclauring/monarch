interface IMonster {
  _id: string;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

interface MonsterProps {
  monster: IMonster;
}

type ApiDataType<TData> = {
  data: TData;
};
