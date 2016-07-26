// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function writeAsync () {
  var appendFile = path.join(__dirname, 'appending.json')
  var teacherJson = JSON.stringify({name: 'Don'})
  fs.appendFile(appendFile, teacherJson, function (err) {
    if (!err) {
      verifyExists(appendFile)
    }
  })
}

function verifyExists (file) {
  fs.stat(file, function(err, stats) {
    console.log(file, 'exists:', stats?stats.isFile():false)
  })
}

writeAsync()
