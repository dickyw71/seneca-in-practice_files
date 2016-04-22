var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, content) {
    if(!err) {
        var newlines = content.toString().split('\n').length-1;
        console.log(newlines);
    }
});
