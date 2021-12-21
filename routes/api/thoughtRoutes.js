const router = require('express').Router();


const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
  } = require('../../controllers/thoughtsController');
  
  // /api/users
  router.route('/').get(getThought).post(createThought);
  
  // api/users/     
  router.route('/').get(getThought).delete(deleteThought);
  
  // /api/users/:userId
  router.route('/:userThought').get(getSingleThought);
  
  module.exports = router;