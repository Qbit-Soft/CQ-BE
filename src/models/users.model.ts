import mongoose from 'mongoose';
import model from '../core/model';

const userSchema = new mongoose.Schema({
  user: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true, enum: ['admin', 'user']},
  initials: String,
  status: String,
})

const usersModel = mongoose.model('User', userSchema);

export default model(usersModel);
