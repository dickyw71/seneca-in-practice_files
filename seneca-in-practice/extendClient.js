var seneca = require('seneca')()
var math = require('./extendedPlugin')

seneca.use(math, {})
seneca.act({role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3]}, 
    function(err, result) {
        console.log(result);
})
seneca.act({role: 'math', cmd: 'sum', integer: 'true', left: process.argv[2], right: process.argv[3]}, 
    function(err, result) {
        console.log(result);
})