function countdown(callback) {
  window.setTimeout(callback)
}

function createMultiplier(multiplierValue) {
  return function multiply(n) {
    return multiplierValue * n
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x, y) {
  return x * y
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(2)
