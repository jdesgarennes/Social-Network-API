const router = require('express').Router();


const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/reactions',thoughtRoutes );

module.exports = router;
