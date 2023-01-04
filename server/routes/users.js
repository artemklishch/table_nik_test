const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/getUsersNumber", usersController.getUsersNumber);

router.get("/", usersController.getUsers);

router.post("/", usersController.generateUsers);

router.delete("/", usersController.deleteUsers);

module.exports = router;
