// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function chmodAsync () {
  var newPath = path.join(__dirname, 'penguin')
  fs.chmod(newPath, 0764, function (err) {
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

chmodAsync()
