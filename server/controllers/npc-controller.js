//------ imports ------

const {NPC} = require("../models");

//---- exports ----
module.exports = {
    async getSingleNpc(npcName, res){
        const foundNpc = await NPC.findOne({customName: npcName})
        res.json(foundNpc)
    },
    async addNewNpc({body}, res){
        const npc = await NPC.create(body);
        if (!npc){
            return res.status(400).json({message: "npc creation error"});
        }
        res.json(npc)
    },
};