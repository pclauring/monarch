import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:7000"

export const getMonsters = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const monsters: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/api/monsters"
    )
    return monsters
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    throw new Error(message)
  }
}

export const createMonster = async (
    formData: IMonster
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const monster: Omit<IMonster, "_id"> = {
        name: formData.name,
        description: formData.description,
        status: false,
      }
      const createMonster: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/api/monsters",
        monster
      )
      return createMonster
    } catch (error) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message
        throw new Error(message)
      }
  }