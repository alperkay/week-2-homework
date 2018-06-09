function pathFind(path, object) {
  const newPath = [...path]
  const newObj = {...object}
  if (newPath.length===Object.keys(newObj).length) {
    return newObj[Object.keys(newObj)[0]]
  }
  else {
    newPath.splice(0,1)
    return pathFind(newPath, newObj[Object.keys(newObj)[0]])
  }
}

module.exports.pathFind = pathFind
