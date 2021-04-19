const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    deadLine: {
        type: String,
        default: "Today"
    },
    createdBy:{
        type: String
    }
},{
    timestamp: true
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;