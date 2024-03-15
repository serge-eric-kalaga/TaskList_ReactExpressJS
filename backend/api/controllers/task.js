const { tasks_list } = require("../models/task")

module.exports.getTaskList = (req, res) => {
    res.status(200).json(tasks_list)
}


