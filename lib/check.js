const expectedTotal = 50

module.exports = function (list) {
  if (!Array.isArray(list)) {
    throw new Error('list must be an array')
  }

  if (list.length !== expectedTotal) {
    throw new Error(`wrong list length: expected ${expectedTotal}, saw ${list.length}`)
  }

  list.forEach(function (val, i) {
    if (list.indexOf(val) !== i) {
      throw new Error('list contained ' + val + ' more than once')
    }
  })

  console.log('Success - list was valid!!!')
}
