import { IMonsterService } from "./IMonsterService";
import ApiClient from "../tools/ApiClient";

export class MonsterService implements IMonsterService {
  private readonly _apiClient: ApiClient;

  constructor(baseUrl: string | undefined, tokenAudience: string | undefined) {
    this._apiClient = new ApiClient([baseUrl, "/api/monsters"], tokenAudience);
  }

  public getMonster(): Promise<IMonster[]> {
    return this._apiClient.get<IMonster[]>();
  }

  // public createLobby(): Promise<Lobby> {
  //   return this._apiClient.post<Lobby>();
  // }

  // public closeLobby(code: string): Promise<Lobby> {
  //   return this._apiClient.post<Lobby>(`${code}/close`);
  // }

  // public sendChat(message: ChatMessage): Promise<boolean> {
  //   return this._apiClient.post<boolean>(`chat`, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   });
  // }

  // public connectToLobbyHub(handlers: LobbyEventHandlers) {
  //   this._hubClient.setupHub(`chatroom`, [[`chatSent`, handlers.chatSent]]);
  // }
}
