var Category = require('../models/category');
exports.createCategory =  (req,res,next) => {
            let categoryObj = new Category({
                name: req.body.name,
                description: req.body.description
            });
	categoryObj.save(err => err?res.json({status:0}):res.json({status: 1, data: "Category saved successfully"}))
}
    