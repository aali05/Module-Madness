var random = require('./data');
var convert = require('./convert');
// The third module should require the other two modules (i.e. Module One and Module Two).
var output = {
  // 1. The first function should call Module 2, passing the result of Module 1 as an argument.
  // use 100 as your min, and 1000000 as your max.
  accountBalance: function () {
    return convert(random(100, 1000000));
  },
// 2. The second function should return the text “Account balance: \n”.
  number: function () {
    return "Account balance: \n";
  }
};




module.exports = output;
// third module
