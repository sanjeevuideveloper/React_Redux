console.log('came in');
var Author = require('../models/author');
/*var dob = '12-02-1950';
var dod = '1-03-1995';*/
exports.createAuthor = function(req,res,next){
	console.log(req.body);
	var authorOb = new Author({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		dob:req.body.dob,
		dod:req.body.dod
	});
	authorOb.save(function(err){
		if(err){
			console.log(err);
			res.json({error:"cant save"})
		} else {
			console.log('success');
			res.json({msg:"author saved"});
		}
	})	
}
//get all authors
exports.getAuthors = function(req,res,next){
	Author.find(function(err,authors_list){
		res.json(authors_list);
	})
	
}

//get a single author
exports.getAuthor = function(req,res,next){
	console.log(req.params);
	Author.findById(req.params.id,function(err,author){
		res.json(author);
	})
	//res.json({"asdf":"ASDf"});
}

exports.deleteAuthor = function(req,res,next){
	Author.findByIdAndDelete(req.params.id,function(err){
		if(err)
			res.json(err.toString());	
		res.json({status:1,msg:"successfully delete author with id "+req.params.id});
	})
}
exports.updateAuthor = function(req,res,next){
	console.log(req.body);
	Author.findOneAndUpdate(req.params.id,req.body, function(err){
		if(err)
			res.json(err.toString());	
		res.json({status:1,msg:"successfully edited author with id "+req.params.id});
	})
}