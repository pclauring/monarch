import axios, { AxiosError, AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:7000";

export const getMonsters = async (): Promise<
  AxiosResponse<ApiDataType<IMonster[]>>
> => {
  try {
    const monsters: AxiosResponse<ApiDataType<IMonster[]>> = await axios.get(
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
): Promise<AxiosResponse<ApiDataType<IMonster>>> => {
  try {
    const monster: Omit<IMonster, "_id"> = {
      name: formData.name,
      description: formData.description,
    };
    const createMonster: AxiosResponse<ApiDataType<IMonster>> =
      await axios.post(baseUrl + "/api/monsters", monster);
    return createMonster;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Error(message);
  }
};
