
var fs = require('fs');

exports.compile = compile;

function compile(files) {

  var src = fs.readFileSync(files[0], 'utf8');
  src.split('\n').filter(function(item) {
    return item.length > 0;
  });

}
