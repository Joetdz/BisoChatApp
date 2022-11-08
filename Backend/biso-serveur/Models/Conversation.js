const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    id: String,
    name: String,
    email: String,
    profil: String,
  },
  { timestamps: true }
);

const MessageSchema = new Schema(
  {
    from: String,
    to: String,
    message: String,
    media_id: String,
    media_url: String,
  },
  { timestamps: true }
);

const ConversationSchema = new Schema({
  moi: String,
  corespondant: String,
  message: [MessageSchema],
});

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = { Conversation };
