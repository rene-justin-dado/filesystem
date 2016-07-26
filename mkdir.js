// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function mkdirAsync () {
  var newPath = path.join(__dirname, 'penguin')
  fs.mkdir(newPath, function (err) {
    if (!err) {
      verifyExists(newPath)
    }
  })
}

function verifyExists (dir) {
  fs.stat(dir, function(err, stats) {
    console.log(dir, 'exists:', stats?stats.isDirectory():false)
  })
}

mkdirAsync()
