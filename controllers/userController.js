const userModel = require('../models/userModel');

const passport = require('../config/passport');

const registerController = async(req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists in the database
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.json({ status: false, message: "User already exists" });
        }

        // Create a new user if the user doesn't exist
        const newUser = new userModel({ name, email, password });
        await newUser.save();

        res.json({ status: true, message: "User successfully registered" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Error in registration", error: error.message });
    }
};

const loginController = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ status: false, message: 'Error in Login', error: err.message });
        }

        if (!user) {
            return res.json({ status: false, message: 'User Invalid, please try again' });
        }

        req.logIn(user, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ status: false, message: 'Error in Login', error: loginErr.message });
            }

            return res.json({ status: true, success: user });
        });
    })(req, res, next);
};

module.exports = { registerController, loginController };