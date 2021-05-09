var User = require('../models/user');
//for encrypting password so that nobody can read the password like database admin etc
const bcrypt = require('bcrypt');
//a middleware is a function that runs before a request comes to a controller. mainly used in authenticatoin
//so that we dont have to do the authentication on every request
const auth = require('../middleware/auth');

const {body,validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
const jwt = require('jsonwebtoken');
//array means it will run all function in the array
exports.addUser = [
body('username').isLength({min:3}).trim().withMessage("Min 3 char"),
async function (req,res,next){
	const errors = validationResult(req);
  //errors is not empty so we will send the user that validation has failed.
	if(!errors.isEmpty()){
		res.json({status:0,data:"validation failed",debug_data:errors.array()});
	} else {
		let user = await User.findOne({
                email:req.body.email
            });
		 if (user) {
      return res.status(400).json({
          msg: "User Already Exists"
      });
    }
   //it is used to encrypt the password . we need a salt to generate secured enccypted password.
		const salt =  await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(req.body.password, salt);
		var userOb = new User({
			username:req.body.username,
			email:req.body.email,
			password:encryptedPassword,
		});
		userOb.save(function(err){
			if(err){
				res.json({status:0,debug_data:err});
			} else {
				res.json({status:1, data:"user saved Successfully"});
			}
		})	
	 }
	}
]

//to find out if user is valid means email and password is correct because we are loggin with email and password. 
//we need to generete a token using jwt and send that token.
exports.login = [
body('email').isLength({min:3}).trim().withMessage("Min 3 char"),
async function (req,res,next){
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		res.json({status:0,data:"validation failed",debug_data:errors.array()});
	} else {
	   const { email, password } = req.body;
	   let user = await User.findOne({
        email:req.body.email
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });
      //i am encrypting password with bcrypt to convert it into hash(means encrypted).
		   const passCorrect = await bcrypt.compare(password, user.password);
      if (!passCorrect)
        return res.status(400).json({
          message: "Password wrong !"
        });

      //i need to send JWT token and also information about the user like his user id and email. 
      	//if the password is correct then we create a jwt token
      	//payload is the data that is sent inside the token to the user
      	const payload = {
	        user: {
	          id: user.id,
	          email:email
	        }
      	};
      	//i am creating a jwt token to send to the front end to let user login. 
      	//As long as user has the token he can login into the website. 
      	//user normally stores token either in cookie(old way ) or in local storage(for react/angular/spa apps)
      	//the user will send this token everytime to the server to verify. if he is not sendng token he is not consideren logged in
      	//and can not access secure area of website
      jwt.sign(
        payload,
        "secretString",
        {
        //time till the token will remain active. after that token will expire
          expiresIn: 1200
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
	 }
	}
]

exports.restrictedPage = [
auth,
async (req,res)=>{
  	  //req.email and req.id..they are added by the middleware so that you dont have to again decode the 
      //token and do these taks
  		res.status(200).json({data:'Zenrays'});
        
  }
  
]

exports.count = [
auth,
async (req,res)=>{
      //req.email and req.id..they are added by the middleware so that you dont have to again decode the 
      //token and do these taks
      res.status(200).json({count:7,title:"Initial Title"});
        
  }
  ]

