var check = require('./lib/check')
var getNumbers = require('./solution')

getNumbers(numbers => {
  check(numbers)
})
