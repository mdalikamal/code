const jwt = require('jsonwebtoken');
const User = require('../model/User');
const verifyToken = (req, res, next) => {
          if (req.headers && req.headers.authorization && req.headers.authorization) {
                    jwt.verify(req.headers.authorization, process.env.API_SECRET, (err, user) => {
                              if (err) {
                                        req.user = undefined;
                                        // console.log(user.id + "" + User._id);
                                        req.message = "Authorization not found";
                                        next();
                              }
                              else {
                                        User.findOne({ _id: user.id }).then(user => {
                                                  // console.log(user.id);
                                                  if (user.role == "admin") {
                                                            req.user = user;
                                                            req.message = `admin`;
                                                            next();
                                                  }
                                                  else {
                                                            req.user = user;
                                                            req.message = `please contact support team`;
                                                            next();
                                                  }
                                        }).catch(err => {
                                                  req.user = undefined;
                                                  req.message = "Authorization not found" + err;
                                                  next();
                                        });
                              }



                    });
          }
          else {
                    req.user = undefined;
                    req.message = "Authorization not found"

          }
}
module.exports = verifyToken;