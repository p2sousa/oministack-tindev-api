import { Schema, model } from 'mongoose';

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model('Dev', DevSchema);
