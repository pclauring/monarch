import { IMonster, EventType } from "./../types/monster";
import { model, Schema } from "mongoose";
import { ObjectId } from "mongodb";

const eventSchema: Schema = new Schema(
  {
    type: { type: String, enum: ["Created", "Training", "Feeding", "Mistake"] },
  },
  { timestamps: true }
);

const traitSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ["Health", "Power", "Intellegence", "Skill", "Speed", "Defense"],
  },
  value: {
    type: Number,
    required: true,
  },
});

const monsterSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    spriteURL: {
      type: String,
      required: true,
    },
    // ownerId: {
    //   type: ObjectId,
    //   required: true,
    // },
    traits: [traitSchema],
    events: [eventSchema],
  },
  { timestamps: true }
);

export default model<IMonster>("Monster", monsterSchema);
