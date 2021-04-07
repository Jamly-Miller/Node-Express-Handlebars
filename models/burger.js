// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burgers = {
  get(cb) {
    orm.get('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(param1Val, cb) {
    orm.create('burgers', 'burger_name', 'devoured', param1Val, 0, (res) => cb(res));
  },

  update(condVal, cb) {
    orm.update('burgers', 'devoured', 1, 'id', condVal, (res) => cb(res));
  },

  delete(param1Val, cb) {
    orm.delete('burgers', 'burger_name', 'devoured', param1Val, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
