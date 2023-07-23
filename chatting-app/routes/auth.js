const { register, login, getAllUsers, setAvatar } = require("../controlers/userController");

const router = require("express").Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getallusers', getAllUsers);
router.put('/setavatar', setAvatar);

module.exports = router;