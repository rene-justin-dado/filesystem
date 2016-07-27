var path = require('path')
var penguin = require('./readAsync')

penguin.readJSONAsync(path.join(__dirname, 'teacher.json'), function(err, obj) {
  if (err) {
    console.error('There was an error somewhere ehehe')
    return
  }
  console.log(obj, typeof obj)
})
