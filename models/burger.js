const orm = require('../config/orm.js');




const burger = {

    allBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    newBurger: function(burger_input, cb) {
        orm.insertOne('burgers', 'burger_name', burger_input, function(res) {
            cb(res);
        });
    }

    
}


module.exports = burger;