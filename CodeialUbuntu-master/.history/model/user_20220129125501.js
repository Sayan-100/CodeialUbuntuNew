const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    avatar: {
        type: string,
    }
}, {
    timestamps: true

});

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join__dirname, '..', AVATAR_PATH);
        //(models<-(user.js + ".."))-> + /uploads/users/avatars
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

//static 

userSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');







const User = mongoose.model('User', userSchema);
module.exports = User;