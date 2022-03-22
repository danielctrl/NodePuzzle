const express = require('express')
var router = express.Router();

router.use(express.static(__dirname + '/assets'));

router.get('/', function(req, res){
    res.render('index.html');
});

router.get('/about', function(req, res){
    res.send('About');
});

//Routing err
router.use(function (err, req, res, next) {
    res.status(500).send('Something went wrong!')
    console.log('err');
    next(err);
})

module.exports = router;