const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema(
  {
    id: String,
    username: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);

UserSchema.pre('save', function(next) {
    // TODO: validate that all fields exist and are correct
    const user = this;

    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.set('collection', 'users');
