const Task = require('../../../models/task');
const User = require('../../../models/user');

module.exports.index = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('todos');
        let tasks = user.todos;

        return res.status(200).json({
          success: true,
          message: "All todos",
          data: {
            todos: tasks,
          },
        });

    } catch (e) {
        return res.status(500).json({
            success:false,
            message: "Internal Server error",
            error: e
        });
    }
}

module.exports.create = async (req, res) => {
    try {
        const user = req.user;
        req.body.user = user._id;
        let task = await Task.create(req.body);

        user.todos.push(task);
        await user.save();

        return res.status(200).json({
          success: false,
          message: "New todo created",
          data: task,
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Internal Server error",
          error: e,
        });
    }
};

module.exports.destroy = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (task.user == req.user.id) {
            task.remove();

            const user = await User.findByIdAndUpdate(req.user.id, { $pull: { todos: req.params.id } });
            return res.status(200).json({
              success: true,
              message: "Todo Deleted",
              data: task,
            });
        } else {
            return res.status(401).json({
              success: false,
              message: "You cannot delete this ToDo",
            });
        }

    } catch (e) {
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Internal Server error",
          error: e,
        });
    }
};
module.exports.update = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);

        if (task.user == req.user.id) {

            if (task) {
                task.description = req.body.description;
                task.createdBy = req.body.createdBy;
                task.deadLine = req.body.deadLine;

                task.save();
                return res.status(200).json({
                  success: true,
                  message: "Todo Updated",
                  data: task,
                });
            }
            else {
                return res.status(404).json({
                  success: false,
                  message: "Task not found",
                });
            }
        } else {
            return res.status(401).json({
              success: false,
              message: "You cannot update this ToDo",
            });
        }


    } catch (e) {
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Internal Server error",
          error: e,
        });
    }
};