const router = require('express').Router(); // creating a route
let User = require('../models/user.model'); // requiring a model
const bcrypt = require('bcrypt'); // importing bcrypt module for password hashing

// route for get request
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users)) // return users in json format
        .catch(err => res.status(400).json('Error: ' + err));
});

// route for signup users
router.route('/signup').post(async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;

        
        // hash the password
        const salt = await bcrypt.genSalt(); // generate a salt
        const password = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({ username, email, password });
        newUser.save()
            .then(() => res.json('User added'))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch {
        res.status(500).send()
    }
    
});

// route for login
router.route('/login').post(async (req, res) => {
    await User.find({username : req.body.username})
                     .then(user => {
                         if (user){
                            try {
                                console.log(user)
                                // compare if password matches
                                if(bcrypt.compare(req.body.password, user.password))
                                {
                                    res.send("Success");
                                } else {
                                    res.send("Not Allowed")
                                }
                            } catch {
                                res.status(500).send()
                            }
                         }
                         else {
                            console.log("user is null");
                            return res.status(400).send('Cannot find user');
                         }
                     })
                     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;