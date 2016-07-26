// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function writeAsync () {
  var teacherFile = path.join(__dirname, 'teacher.json')
  var teacherJson = JSON.stringify({name: 'Dana'})
  fs.writeFile(teacherFile, {"Up": "Down"}, function (err) {
    if (!err) {
      verifyExists(teacherFile)
    }
  })
}

function verifyExists (teacherFile) {
  fs.exists(teacherFile, function(exists) {
    console.log(teacherFile, 'exists:', exists)
  })
}

writeAsync()
