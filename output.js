var random = require('./data');
var convert = require('./convert');

var output = {
  accountBalance: function () {
    return convert(random(1, 1000000));
  },

  number: function () {
    return "Account balance: \n";
  }
};




module.exports = output;
// third module The third module should require the other two modules (i.e. Module One and Module Two).
// It should also have two exported functions:
// 1. The first function should call Module 2, passing the result of Module 1 as an argument.
// 2. The second function should return the text “Account balance: \n”.
