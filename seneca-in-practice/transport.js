var seneca = require('seneca')()
var math = require('./extendedPlugin')

// http port is pased in process.argv[2]
seneca.use(math, {}).listen(process.argv[2])

// model solution 
// require('seneca')().use('math').listen(process.argv[2], '127.0.0.1')