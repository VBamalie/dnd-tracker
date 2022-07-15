//-----imports-----
const router = require("express").Router();

//imports all prototypes from the user controller module
//add more later
const {
    getSingleUser,
    createUser,
    login,
} = require("../../controllers/user-controller");

const { authMiddleware}  = require("../../utils/auth")

//-----routes------
router.route('/').post(createUser).put(authMiddleware, saveBook);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
