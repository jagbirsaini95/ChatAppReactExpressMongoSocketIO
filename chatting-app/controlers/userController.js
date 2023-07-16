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

    }
}

module.exports.login = (req, res, next) => {
    try {
        console.log(req);
    } catch (error) {

    }
}