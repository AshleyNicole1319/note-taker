const router = require('express').Router();
const notesRoutes = require('../APIroutes/NOTESroute');

router.use(notesRoutes);

module.exports = router; 