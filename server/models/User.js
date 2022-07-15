const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import spot


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    //add other schemas here
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hashes the password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// checks the user password the user logged in with with their hashed password in the database
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// put any virtuals we may need here

const User = model('User', userSchema);

module.exports = User;