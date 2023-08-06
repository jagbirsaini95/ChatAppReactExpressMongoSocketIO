const { message, addMessage, getAllMessage } = require('../controlers/messageController');

const router = require('express').Router();


router.post('/getallmsg', getAllMessage);
router.post('/addmsg', addMessage);

module.exports = router;