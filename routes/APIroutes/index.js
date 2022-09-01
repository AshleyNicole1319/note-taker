const router = require('express').Router();
const notesRoutes = require('../APIroutes/NOTESroute');

router.use(notesRoutes);
router.use(require('./NOTESroute'));

module.exports = router; 