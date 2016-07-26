// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function readAsync () {
var studentsFile = path.join(__dirname, 'people.json')
fs.readFile(studentsFile, showContents)
}

function showContents (err, buffer) {
if (err) {
  return console.log(err.message)
}

//buffer = your bag of data,  toString transforms Unicode to human readable characters
var studentObj = buffer.toString()
console.log(studentObj)
}

readAsync()
