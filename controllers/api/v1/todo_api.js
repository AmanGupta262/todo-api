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

module.exports.destroy = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        task.remove();
        return res.status(200).json({
            message: "Task Deleted",
            data: task
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }
};
module.exports.update = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        if(task){
            task.description = req.body.description;
            task.createdBy = req.body.createdBy;
            task.deadLine = req.body.deadLine;

            task.save();
            return res.status(200).json({
                message: "Task Updated",
                data: task
            });
        }
        else{
            return res.status(404).json({
                message: "Task not found"
            });
        }
        

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }
};