//------ imports ------

const {Battle} = require("../models");

//---- exports ----

module.exports = {
    async getSingBattle(battleId, res){
        const foundBattle = await Battle.findById(battleId).popupate('enemies').populate('allies').exec(function (err, battle){
            if (err) return handleError(err);
            return battle
        })
        res.json(foundBattle)
    },
    async createBattle({body}, res){
        const newBattle = await Battle.create(body)
        if(!newBattle){
            return res.status(400).json({message: "battle creation error"})
        }
        res.json(newBattle)
    }
}