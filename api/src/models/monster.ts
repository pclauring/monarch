import { IMonster, EventType } from "./../types/monster";
import { model, Schema } from "mongoose";

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
    events: [
      new Schema(
        {
          type: String,
          enum: ["Training", "Feeding", "Mistake"],
        },
        { timestamps: true }
      ),
    ],
  },
  { timestamps: true }
);

export default model<IMonster>("Monster", monsterSchema);
