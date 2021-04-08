// Import MySQL connection.
const connection = require('./connection.js');


// Object for all our SQL statement functions.
const orm = {

  selectAll (table, cb) {
    connection.query("SELECT * FROM ??", [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne(table, param1, param2, param1Val, param2Val, cb) {
    connection.query(
      "INSERT INTO ?? (??, ??) VALUES (?, ?)",
      [table, param1, param2, param1Val, param2Val],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },

  updateOne(table, column, colVal, condition, condVal, cb) {
    connection.query(
      "UPDATE ?? SET ?? = ? WHERE ?? = ?",
      [table, column, colVal, condition, condVal],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};


// Export the orm object for the model (burgers.js).
module.exports = orm;