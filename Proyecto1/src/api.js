const router = require('express').Router();

const userRoutes = require('./modules/users/routes.js');
const todosRoutes = require('./modules/todos/routes.js');

router.use(userRoutes);
router.use(todosRoutes);

module.exports = router;