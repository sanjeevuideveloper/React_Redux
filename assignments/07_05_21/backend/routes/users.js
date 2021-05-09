var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/donttalk', function(req, res, next) {
  res.send('speech is silver silence is gold!');
});
router.get('/restrictedpage',userController.restrictedPage);
router.post('/register',userController.addUser);
router.post('/login',userController.login);
router.get('/count', userController.count);



module.exports = router;
