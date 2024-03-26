var mongoose = require('mongoose')//mogoose is way to interact to mongodb
var Schema = mongoose.Schema;
var userSchema = new Schema({
    
          fullName: {
                    type: String,
                    required: [true, 'Full name is required'],

          },
          email: {
                    type: String,
                    required: [true, 'Email is required'],
                    lowercase: true,
                    trim: true,
                    unique: true,
                    validate: {
                              validator: function (value) {
                                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                              },
                              message: 'Invalid email address format',
                    }
          },
          password: {
                    type: String,
                    required: [true, 'Password is required'],

          },
          role: {
                    type: String, // Specify the type (e.g., String, Array, etc.)
                    required: [true, 'Role is required'],
                    enum: ["admin", "normal"]
          },
          created: {
                    type: Date,
                    default: Date.now

          }
});
module.exports = mongoose.model("User", userSchema);