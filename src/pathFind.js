function pathFind(path, object) {
  if (path.length!==Object.keys(object).length) {
    const newPath = [...path]
    const newObj = {...object}
    newPath.splice(0,1)
  //this is recursive, but i'm still getting error in the test
    return pathFind(newPath, newObj[Object.keys(newObj)[0]])
  }
  else {
    return object[Object.keys(object)[0]]
  }
}

module.exports.pathFind = pathFind
