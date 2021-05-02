const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind("Error in connecting to mongodb"));

db.once('open', () => {
    console.log("Connected to database : MongoDB");
});

module.exports = db