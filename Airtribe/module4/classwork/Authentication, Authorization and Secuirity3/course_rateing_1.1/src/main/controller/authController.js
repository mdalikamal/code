const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
var signup = (req, res) => {
          const user = new User({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 8),
                    role: req.body.role
          });

          user.save().then((data) => {
                    return res.status(201).json({ user: data, message: "user had been created  " });
          }).catch((error) => {
                    return res.status(500).json({
                              user: error
                    })
          });


}
var login = (req, res) => {
          var emailPassed = req.body.email;
          var passwordPassed = req.body.password;
          User.findOne({
                    email: emailPassed
          }).then((user) => {
                    if (!user) {
                              return res.status(404).json({ message: "user not found" });
                    }

                    let passwordsValid = bcrypt.compareSync(passwordPassed, user.password);
                    if (!passwordsValid) {
                              return res.status(401).json({ message: "password is not correct" });
                    }
                    else {
                              var token = jwt.sign({
                                        id: user._id,
                                        //  role: user.role
                                        /*env are something which are never code committed
                                        we can't put secret on github they are always written in environment variable  */
                              }, process.env.API_SECRET, { expiresIn: 86400 });
                              return res.status(200).json({
                                        user: user,
                                        token: token,
                                        message: "login is in success",
                              })
                    }
          }).catch((error) => {
                    return res.status(500).json({
                              user: error
                    })
          })
}
module.exports = { signup, login };