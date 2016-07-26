var fs = require('fs')

module.exports = {
  readJSONAsync: readJSONAsync
}

function readJSONAsync (JSONpath, callback) {
  // Read from JSON and return a js object
  fs.readFile(JSONpath, function (err, data) {
    if (err) {
      console.error('There was an error reading your file')
      return
    }
    var obj = JSON.parse(data)
    callback(err, obj)
  })
}
