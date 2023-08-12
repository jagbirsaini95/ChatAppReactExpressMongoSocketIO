const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socket = require('socket.io');
const app = express();
const authRoutes = require('./routes/auth');
const messgaeRoutes = require('./routes/messages');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Monogo connected successfully");
}).catch((err) => {
    console.log(err.message);
})

app.use('/api/auth', authRoutes);
app.use('/api/message', messgaeRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log('server started successfully at ', process.env.PORT);
})

global.onlineUsers = new Map();
const io = socket(
    server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    },
}
)
io.on('connection', (socket) => {
    global.chatSocket = socket;
    socket.on('add-user', (userId) => {
        onlineUsers.set(userId, socket.id)
    })
    socket.on('send-msg', (data) => {
        console.log("message", data);
        const sendUserSocket = onlineUsers.get(data.to)
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit('msg-recieve', data.message);
        }
    })
})
