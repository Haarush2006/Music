import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
   mobile: {
    type: String,
    required: [true, 'Mobile no is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  verifyCode: {
    type: String,
    // required: [true, 'Verify Code is required'],
  },
  expiryDate: {
    type: Date,
    // required: [true, 'Verify Code Expiry is required'],
  }
});

export const UserModel =
  (mongoose.models.User) ||
  mongoose.model('User', UserSchema);