module.exports = function getNumber(cb) {
  setTimeout(() => {
    cb(Math.floor(Math.random() * 100))
  }, Math.random() * 100)
}
