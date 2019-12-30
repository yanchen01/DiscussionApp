const router = require('express').Router(); // creating a route
let User = require('../models/user.model'); // requiring a model

// first route for get request
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users)) // return users in json format
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.username;
    const password = req.body.username;


    const newUser = new User({ username, email, password });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;