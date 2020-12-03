// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
// router.get('/', ctrl.reviews.index);
router.get('/:restaurantId', ctrl.reviews.index);
// router.post('/', ctrl.reviews.create);
// router.put('/:id', ctrl.reviews.update);
// router.delete('/:id', ctrl.reviews.destroy);

// exports
module.exports = router;