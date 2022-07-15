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
    async createBattle
}