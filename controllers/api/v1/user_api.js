const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.create = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (user){
            return res.status(500).json({
                message: "User already exists"
            })
        }
        req.body.password = await bcrypt.hash(password, 10);
        const newUser = await User.create(req.body);

        return res.status(200).json({
            message: 'User Created',
            newUser
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }
    
};

module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            const isValidPassword = await user.isValidPassword(user, password);
            if(isValidPassword)
                return res.status(200).json({
                    message: "User Authenticated",
                    data: {
                        token: jwt.sign(user.toJSON(), 'secret', {expiresIn: '1000000'})
                    }
                });
        }

        return res.status(422).json({
            message: 'User Unauthenticated'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal Server error",
            error: e
        });
    }

};