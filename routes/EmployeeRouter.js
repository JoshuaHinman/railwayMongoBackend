import express from 'express';
//import { Router }  from  'express';
import Employee from '../models/EmployeeModel.js';
//const bcrypt = require('bcrypt')
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).send('Welcome to this blank page!');
});
// router.post('/signup', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,
//     })
//     console.log(user)
//     try {
//       const newUser = await user.save();
//       res.status(200).json({id: user._id, username: user.username, signupDate: user.signupDate});
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// });

// //Get one
// router.post('/login', (req, res) => {
//     const {username, password} = req.body;
//     User.findOne({username: username}, (err, user) => {
//         if (user) {
//             bcrypt.compare(password, user.password, async (err, same) => {
//                 if(same) {
//                     console.log("login successful")
//                     const count = await Review.countDocuments({ userid: user._id});
//                     req.session.userId = user._id;
//                     req.session.userName = user.username;
//                     req.session.userSignup = user.signupDate;
//                     res.status(200).json({id: user._id, username: user.username, signupDate: user.signupDate, postCount: count});
//                 } else {
//                     console.log("declined: wrong password")
//                     res.status(500).json({message: 'password'});
//                 }
//             })
//         } else {
//             console.log("declined: no username match")
//              res.status(500).json({message: 'username'});
//         }
//     } )
// });

// router.post('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/')
//     })
// });
export default router;