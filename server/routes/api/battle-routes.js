//-----imports-----
const router = require("express").Router();

//imports all prototypes from the user controller module
//add more later
const {
    getSingBattle,
    createBattle,
} = require("../../controllers/battle-controller");

//--------routes ----

router.route('/').post(createBattle);
router.route('/:battleId').get(getSingBattle)

module.exports = router;