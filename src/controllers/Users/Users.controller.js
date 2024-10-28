const Users = require("../../models/Users.model.js");

class ClassUsers {
  static async getAll(user) {
    const users = await Users.find();
    return users;
  }

  static async getById(id) {
    const userId = await Users.findById(id);
    userId.password = undefined;
    return userId;
  }

  static async getByToken(token) {
    const user = await Users.findOne({ token: token });
    if (!user) {
      throw new Error("Error");
    } else {
      return user;
    }
  }

  static async createUser(userData) {
    try {
      const newUser = new Users(userData);
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }
}

module.exports = { ClassUsers };