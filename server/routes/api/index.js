const router = require('express').Router();
const userRoutes = require('./user-routes');
const npcRoutes = require('./npc-router')
const battleRoutes = require("./battle-routes")


router.use('/users', userRoutes);
router.use('/npc', npcRoutes);
router.use('/battle', battleRoutes)

module.exports = router;
