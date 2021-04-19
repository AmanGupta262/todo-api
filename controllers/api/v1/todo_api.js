const Task = require('../../../models/task');

module.exports.index = async (req, res) => {
    try {
        let tasks = await Task.find({});
        
        return res.status(200).json({
            message: "List of Tasks",
            tasks: tasks
        });
        
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }
}

module.exports.create = async (req, res) => {
    try {
        let task = await Task.create(req.body);

        return res.status(200).json({
            data: task,
            message: "Task Created"
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }
};