import { AxiosResponse } from "axios";
export interface IMonsterService {
  getMonster(): Promise<AxiosResponse<IMonster[]>>;
  getMonstersForUser(userId: string): Promise<AxiosResponse<IMonster[]>>;
  createMonster(monster: IMonster): Promise<AxiosResponse<IMonster>>;
  deleteMonster(_id: string): Promise<AxiosResponse<IMonster>>;
  addTraining(monster: IMonster): Promise<AxiosResponse<IMonster>>;
}
