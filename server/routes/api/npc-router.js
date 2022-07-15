//-----imports-----
const router = require("express").Router();

//imports all prototypes from the user controller module
//add more later

const {
    getSingleNpc,
    addNewNpc
} = require("../../controllers/npc-controller")

//------ routes ----

router.route("/").post(addNewNpc)
router.route("/:npcName").get(getSingleNpc)

module.exports = router