var express = require('express');
var router =  express.Router();
var authorController = require('../controllers/author');
var categoryController = require('../controllers/category');
var booksController = require('../controllers/book');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',miniTitle:'miniTitle text' });
});
router.get('/newroute',function(req,res,next){
	res.send("i am a new route named new route ")
})
router.post('/author',authorController.createAuthor);
router.get('/author',authorController.getAuthors);
router.get('/author/:id',authorController.getAuthor);
router.delete('/author/:id',authorController.deleteAuthor);
router.put('/author/:id',authorController.updateAuthor);
router.post('/category',categoryController.createCategory);
router.post('/book',booksController.createBook);


router.get('/pancard',function(req,res,next){
	 res.json({pan:123}) ;
})
router.get('/income/:pan',function(req,res,next){
	 if(req.params.pan == 123){
	 	res.json({income:400000})
	 } else {
	 	res.json({error:"not valid pan"})
	 }
})

module.exports = router;
