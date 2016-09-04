var seneca = require('seneca')()
var math = require('./extendedPlugin')

// http port is pased in process.argv[2]
//seneca.use(math, {}).listen(process.argv[2], {type:'tcp'})
//seneca.use(math, {}).listen(process.argv[2], '127.0.0.1', {type:'tcp'})


seneca.use(math, {}).listen({type:'tcp'})


// model solution 
// require('seneca')().use('math').listen(process.argv[2], '127.0.0.1')