const { v4: uuidv4 } = require("uuid");

module.exports = class User {
  constructor(firstName, lastName, age, income, avatar, username) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.income = income;
    this.avatar = avatar;
    this.username = username;
    this.userId = uuidv4();
  }
};
