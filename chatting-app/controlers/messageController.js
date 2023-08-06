const Messages = require('../models/messageModel');

module.exports.addMessage = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await Messages.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        })
        if (data)
            return res.json({
                status: true,
                msg: 'Message added successfuly'
            })

        return res.json({
            status: false,
            msg: 'failed to add message'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.getAllMessage = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const messages = await Messages.find({
            users: {
                $all: [from, to],
            }
        }).sort({ updatedAt: 1 })
        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            }
        })
        return res.json({
            status: true,
            data: projectedMessages,
            msg: 'messages fetched'
        })
    } catch (error) {

    }
}