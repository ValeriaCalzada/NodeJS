const router = require('express').Router();
const Controller = require('./Controller');
const auth = require('./../../middlewares/auth');



router.use('/todos', auth)

router.get('/todos',  Controller.get);
router.get('/todos/:id', Controller.getOne);

router.post('/todos', Controller.create);

module.exports = router;

