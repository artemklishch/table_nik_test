const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const { faker } = require("@faker-js/faker");
const MAX_DATA_NUMBER_TO_RESPONSE = 10000;
const MIN_USERS_TOTAL_NUMBER = 1000000;
const MAX_USERS_TOTAL_NUMBER = 2000000;

const storagePath = path.join(
  path.dirname(require.main.filename),
  "storage",
  "users.txt"
);
const storageUsersNumberPath = path.join(
  path.dirname(require.main.filename),
  "storage",
  "usersNumber.txt"
);

exports.getUsersNumber = (req, res) => {
  fs.readFile(storageUsersNumberPath, (err, fileContent) => {
    if (err) {
      res.status(500).json({
        message: "Impossible to fetch data. Internal server error",
      });
    } else if (fileContent.length === 0) {
      res.status(200).json({ totalItems: 0 });
    } else {
      res.status(200).json({ totalItems: JSON.parse(fileContent) });
    }
  });
};

exports.getUsers = (req, res) => {
  fs.readFile(storagePath, (err, fileContent) => {
    if (err) {
      res.status(500).json({
        message: "Impossible to fetch data. Internal server error",
      });
    } else if (fileContent.length === 0) {
      res.status(200).json({
        totalItems: 0,
        message: "No users found",
        users: [],
      });
    } else {
      const pageNumber = +req.get("Page");
      const usersData = JSON.parse(fileContent);
      const usersToResponse = Object.values(usersData).slice(
        pageNumber * MAX_DATA_NUMBER_TO_RESPONSE,
        pageNumber * MAX_DATA_NUMBER_TO_RESPONSE + MAX_DATA_NUMBER_TO_RESPONSE
      );
      res.status(200).json({
        totalItems: Object.values(usersData).length,
        message: "Users are fetched successfully",
        users: usersToResponse,
      });
    }
  });
};

exports.generateUsers = (req, res) => {
  const usersTotalNumber = faker.datatype.number({
    min: MIN_USERS_TOTAL_NUMBER,
    max: MAX_USERS_TOTAL_NUMBER,
  });

  const generatedUsers = {};
  for (let i = 0; i < usersTotalNumber; i++) {
    const gender = faker.name.sex();
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const userName = faker.internet.userName(firstName, lastName);
    const user = new User(
      firstName,
      lastName,
      faker.datatype.number({ min: 20, max: 100 }), // age random data
      faker.datatype.number({ max: 1000 }), // income random data
      faker.image.avatar(), // random avatar
      userName
    );
    generatedUsers[user.userId] = user;
  }

  fs.writeFile(storagePath, JSON.stringify(generatedUsers), (err) => {
    if (err) {
      console.log(err);
    }
    fs.writeFile(
      storageUsersNumberPath,
      JSON.stringify(usersTotalNumber),
      (err) => {
        if (err) {
          console.log(err);
        }
        res.status(201).json({
          message: "Data was created successfully",
          totalItems: usersTotalNumber,
        });
      }
    );
  });
};

exports.deleteUsers = (req, res) => {
  fs.writeFile(storagePath, "", (err) => {
    if (err) {
      console.log(err);
    }
    fs.writeFile(storageUsersNumberPath, "0", (err) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json({
        message: "Data was deleted successfully",
      });
    });
  });
};
