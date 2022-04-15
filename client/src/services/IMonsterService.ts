export interface IMonsterService {
  getMonster(): Promise<IMonster[]>;
  //   closeLobby(code: string): Promise<Lobby>;
  //   createLobby(): Promise<Lobby>;
  //   sendChat(message: ChatMessage): Promise<boolean>;
  //   connectToLobbyHub(handlers: LobbyEventHandlers): void;
}
