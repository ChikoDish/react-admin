import mongoose from "mongoose";

const Schema = mongoose;
const roleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    answerableTo: {
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Roles = mongoose.model("roles", roleSchema);
export default Roles;
