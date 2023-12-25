// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const userModel = require('../models/userModel');
// const bcrypt = require('bcrypt');

// passport.use(
//     new LocalStrategy(async(username, password, done) => {
//         try {
//             const user = await userModel.findOne({ email: username });
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username or email' });
//             }

//             const passwordMatch = await bcrypt.compare(password, user.password);
//             if (!passwordMatch) {
//                 return done(null, false, { message: 'Incorrect password' });
//             }

//             return done(null, user);
//         } catch (error) {
//             return done(error);
//         }
//     })
// );

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async(id, done) => {
//     try {
//         const user = await userModel.findById(id);
//         done(null, user);
//     } catch (error) {
//         done(error);
//     }
// });