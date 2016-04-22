var seneca = require('./program.js')()

seneca.act({role:'math',cmd:'sum', name: 'Macro'}, function(err,result){
    if (err) return console.error (err)
    console.log(result);
})



