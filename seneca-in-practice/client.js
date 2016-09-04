var seneca = require('./math.js')

seneca.act({role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3]}, 
    function(err, result) {
        console.log(result);
})