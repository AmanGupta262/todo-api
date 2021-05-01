const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
},{
    timestamps: true
});

userSchema.pre(
    'save',
    async function(next) {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

userSchema.methods.isValidPassword = async function(user, password) {
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

const User = mongoose.model('User', userSchema);
module.exports = User;