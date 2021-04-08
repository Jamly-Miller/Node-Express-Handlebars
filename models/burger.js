// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  
  insertOne(param1Val, cb) {
    orm.insertOne(
      "burgers", 
      "burger_name", 
      "devoured", 
      param1Val, 
      0, 
      (result) => cb(result)
    );
  },

  updateOne(condVal, cb) {
    orm.updateOne(
      "burgers", 
      "devoured", 
      1, 
      "id", 
      condVal, 
      (result) => cb(result)
    );
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

