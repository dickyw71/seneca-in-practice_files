var fs = require('fs');
var path = require('path');

module.exports = function filterFiles(dirname, extension, callback) {
    fs.readdir(dirname, function(err, list){
       if(err) {
           return callback(err);
       }
       var filtered =  list.filter(function(file) {
           return (path.extname(file) === '.' + extension);
       }) 
       callback(null, filtered);     
    });
};