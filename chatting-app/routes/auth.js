const { register, login, getAllUsers, setAvatar, logOut } = require("../controlers/userController");

const router = require("express").Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getallusers/:id', getAllUsers);
router.put('/setavatar/:id', setAvatar);
router.get("/logout/:email", logOut);
module.exports = router;