const router = require('express').Router();
const Controller = require('./controller');
const auth = require('./../../middlewares/auth');


router.use('/users', auth)

router.get('/users',  Controller.get);
router.get('/users/:id', Controller.getOne);

router.post('/users', Controller.create);


module.exports = router;

//manejador de rutas   same thing de dos diferentes maneras


//module.exports = function(app){
//app.get('/usuarios', (req, res) => {
//    res.send(['usuarios']);
//});}