const express = require("express");

const router = express.Router(); //integrated "mini-app" found in Express

const burger = require("../models/burger.js");




router.get("/", function(req, res) {

    burger.allBurgers(function(result){
        console.log(result);

        let hbObject = {
            burgers : result
        }

        res.render('index', hbObject);
    })


});

router.post("/", function(req, res) {
    const burgerInput = req.body.burgerInput;
    
    burger.newBurger(burgerInput, function(result){
        res.redirect("/");

    })
});


module.exports = router;


