import { IMonster } from "./../types/monster"
import { model, Schema } from "mongoose"

const monsterSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IMonster>("Monster", monsterSchema)