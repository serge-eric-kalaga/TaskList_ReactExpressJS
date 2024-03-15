const express = require("express");
const { getTaskList } = require("../controllers/task");
const taskRouter = express.Router()

taskRouter.get("/", getTaskList)


module.exports = taskRouter;