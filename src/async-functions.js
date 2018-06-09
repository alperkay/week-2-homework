function giveItBackLater(value, callback) {
  function loadComplete() {
    callback(value)
  }
  setTimeout(loadComplete, 100)
}

function addSomePromises(somePromise) {
  return new Promise((resolve,reject) => {
    if (somePromise=="foo") {
      return resolve(`${somePromise}${somePromise}`)
    } else if (somePromise==="bar") {
      return reject(`${somePromise}${somePromise}${somePromise}`)
    }
    })
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve,reject) => {
    function loadComplete() {
      resolve(value)
    }
    setTimeout(loadComplete,1000)
  })
}

console.log(addSomePromises('foo'))

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
