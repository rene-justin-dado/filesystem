// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function ftruncateAsync () {
  var newPath = path.join(__dirname, 'teacher.json')
  fs.open(newPath, 'rs+', function(err, fd) {
    fs.ftruncate(fd, 3, function (err) {
      if (!err) {
        console.log(fs.fstatSync(fd).size)
      }
    })
  })
}

ftruncateAsync()
