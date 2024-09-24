const { generateAuthToken } = require("../../authentication/providers/jwt");
const { createError } = require("../../utils/handleErrors");
const { generateUserPassword, comparePasswords } = require("../helpers/bcrypt");
const User = require("./mongodb/User");
const { pick } = require("lodash");

const registerUser = async (newUser) => {
  try {
    newUser.password = generateUserPassword(newUser.password);
    let user = new User(newUser);
    user = await user.save();
    return pick(user, ["_id", "name", "email"]);
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const getUser = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const getUsers = async () => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    return createError("Mongoose", error);
  }
};

const loginUser = async (email, password) => {
  try {
    const userFromDb = await User.findOne({ email });
    if (!userFromDb) {
      const error =  new Error("Invalid email or password");
      error.status = 401;
      return createError("Authentication", error);
    }
    
    if (!comparePasswords(password, userFromDb.password)) {
      const error =  new Error("Invalid email or password");
      error.status = 401;
      return createError("Authentication", error);
    }
    const token = generateAuthToken(userFromDb);
    return token;
  } catch (error) {
    return createError("Mongoose", error);  }
};

module.exports = { registerUser, getUser, getUsers, loginUser };
