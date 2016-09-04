var seneca = require('./math.js')()

seneca.act({role:'math',cmd:'sum', left: 3, right: 2}, function(err,result){
    if (err) return console.error (err)
    console.log(result.total);
})



