const { register, login, getAllUsers, setAvatar, logOut } = require("../controlers/userController");

const router = require("express").Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getallusers', getAllUsers);
router.put('/setavatar', setAvatar);
router.get("/logout", logOut);
module.exports = router;