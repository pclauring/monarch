import { Document } from "mongoose"

export interface IMonster extends Document {
  name: string
  description: string
  status: boolean
}