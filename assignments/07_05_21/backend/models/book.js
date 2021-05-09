var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	title:{type:String, required:true},
	author:{type:mongoose.Schema.ObjectId, ref:'Author',required:true},
	summary:{type:String,required:true},
	isbn:{type:String, required:true},
	category:{type:mongoose.Schema.ObjectId,ref:'Category'}
});

module.exports = mongoose.model('Book',BookSchema);