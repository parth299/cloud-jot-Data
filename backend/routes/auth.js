const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const JWT_sceret = "Parthsainikapassword";
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');


// ROUTE 1: Create the user for the post request: ./api/auth/createUser | doesnt require authentication
router.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {

    //If there are erros, return Bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user with the email exists already
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ error: "User with this email already exits" });
        }
        else {

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            })
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_sceret);


        res.json({authToken});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
    
})


// ROUTE 2: Login the user with correct credentials: ./api/auth/login | require authentication
router.post('/login', [
    body('email', "Enter an email").isEmail(),
    body('password', "Password should not be blank").exists()
], async (req, res) => {

    //If there are erros, return Bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
        
        //find the email in the data base. If it does not exists, return bad request.
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please login with correct credentials"});
        }

        //The email is present in the database
        //Now verify the password using bcrypt

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please login with correct credentials"});
        }

        //If flow reaches this point means the passoword comparison was succesfull and user is autheticated
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_sceret);
        res.json({authToken});


    } catch (error) {
        return res.status(400).json({error});
    }


})


// ROUTE 3: Fetch the details of the user : ./api/auth/getuser | require authentication
router.post('/getuser', fetchuser, async (req, res) => {

    try {
       userId = req.user.id;
       const user = await User.findById(userId).select("-password");
       res.send(user);
    } 
    catch (error) {
        console.log(error);
        res.status(401).send({error: "Please authenticate using valid token"});
    }

})

module.exports = router;