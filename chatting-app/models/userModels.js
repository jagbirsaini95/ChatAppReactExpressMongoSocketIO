const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false,
        required: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 30,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
        max: 10,
    },
    mobileNumber: {
        type: Number,
        unique: true,
        required: false,
        default: ''
    },
    password: {
        type: String,
        required: true,
        unique: false,
        min: 6
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImagePath: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastLoggedInAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("users", userSchema);