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