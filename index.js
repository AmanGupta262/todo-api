const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const cors = require('cors');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', require('./routes'));

app.use(passport.initialize());

app.listen(port, err => {
    if(err){
        console.log("Error in starting server: ", err);
        return;
    }

    console.log(`Server is running on ${port}`);
});