import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:7000";

export const getMonsters = async (): Promise<AxiosResponse<IMonster[]>> => {
  try {
    const monsters: AxiosResponse<IMonster[]> = await axios.get(
      baseUrl + "/api/monsters"
    );
    return monsters;
  } catch (error) {
    let message = "Unknown Error";
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
};

export const createMonster = async (
  formData: IMonster
): Promise<AxiosResponse<IMonster>> => {
  try {
    //Omit
    const monster: Pick<IMonster, "name"> = {
      name: formData.name,
    };
    const createMonster: AxiosResponse<IMonster> = await axios.post(
      baseUrl + "/api/monsters",
      monster
    );
    return createMonster;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
};

export const updateMonster = async (
  monsterToUpdate: IMonster
): Promise<AxiosResponse<IMonster>> => {
  try {
    const monster: Pick<IMonster, "events"> = {
      events: monsterToUpdate.events
        ? monsterToUpdate.events.concat([{ type: "Training" }])
        : [{ type: "Hatch" }],
    };
    const updatedMonster: AxiosResponse<IMonster> = await axios.put(
      `${baseUrl}/api/monsters/${monsterToUpdate._id}`,
      monster
    );
    return updatedMonster;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
};

export const deleteMonster = async (
  _id: string
): Promise<AxiosResponse<IMonster>> => {
  try {
    const deletedMonster: AxiosResponse<IMonster> = await axios
      .delete(`${baseUrl}/api/monsters/${_id}`)
      .catch();
    return deletedMonster;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
};
