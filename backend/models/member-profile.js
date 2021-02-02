import mongoose from "mongoose";

const { Schema } = mongoose;

const member_profileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    displayImage: {
      type: "String",
    },
    about: {
      type: "String",
    },
    address: {
      type: "String",
    },
    role: {
      type: "String",
    },
    roleId: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const MemberProfile = mongoose.model("member_profile", member_profileSchema);
export default MemberProfile;
