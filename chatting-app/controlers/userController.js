const Users = require("../models/userModels");
const bcrpt = require('bcrypt')
module.exports.register = async (req, res, next) => {
    try {
        const { name, email, mobileNumber, password } = req.body;
        const emailCheck = await Users.findOne({ email });
        if (emailCheck) {
            return res.json({
                status: false,
                msg: "user Already Registered"
            })
        }
        const encryptPassword = await bcrpt.hash(password, 6);
        const user = await Users.create({
            name,
            email,
            mobileNumber,
            userName: email.split('@')[0],
            password: encryptPassword,
        })

        console.log(user);
        user.save();
        return res.json({
            status: true,
            msg: "user Registered",
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.json({
                status: false,
                msg: "Email address not registered"
            })
        }
        const userAuthenticated = await bcrpt.compare(password, user.password);
        if (userAuthenticated) {
            return res.json({
                status: true,
                msg: "Login success",
                data: user
            })
        } else {
            return res.json({
                status: false,
                msg: "Login failed",
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        // const user = await Users.findOne({ email: req.params.id });
        //for removing logged in user $ne with uer._id
        const users = await Users.find({ _id: { $ne: req.params.id } }).select([
            "email",
            "userName",
            "name",
            "avatarImagePath",
            "_id",
        ]);

        return res.json({
            status: true,
            msg: users.length !== 0 ? "users fetched" : "No user found except logged in",
            data: users
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.setAvatar = async (req, res, next) => {
    try {
        const user = await Users.findOne({ _id: req.params.id });
        const avatarImage = req.body.image;

        const updatedUser = await Users.findByIdAndUpdate(
            user._id,
            {
                isAvatarImageSet: true,
                avatarImagePath: avatarImage,
            },
            { new: true }
        )

        return res.json({
            status: true,
            msg: "Avatar updated",
            data: updatedUser
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports.logOut = async (req, res, next) => {
    try {
        const user = await Users.findOne({ email: req.params.id });

        onlineUsers.delete(req.params.id);
        if (user) {
            return res.json({
                msg: "user logged out",
                status: true,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
