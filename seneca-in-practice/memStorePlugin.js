module.exports = function math ( options ) {
    
    var calc = null

    this.add('role:math, cmd:sum', function(args, callback) {
        var sum = parseFloat(args.left) + parseFloat(args.right);
        callback(null, { answer: sum });
        
        calc = this.make('calc')
        calc.cmd = 'sum'
        calc.left = args.left
        calc.right = args.right

        calc.save$(function(err,calc){
            console.log(calc.cmd, calc.left, calc.right) })
    });

    this.add('role:math, cmd:sum, integer:true', function(args, callback) {
        var sum = parseFloat(Math.floor(args.left)) + parseFloat(Math.floor(args.right));
        callback(null, { answer: sum });
    });

    this.add('role:math, cmd:product', function(args, callback) {
        var product = parseInt(args.left, 10) * parseInt(args.right, 10);
        callback(null, { answer: product });

        calc = this.make('calc')
        calc.cmd = 'product'
        calc.left = args.left
        calc.right = args.right

        calc.save$(function(err,calc){
            console.log(calc.cmd, calc.left, calc.right) })
    })

    this.add('role:math, cmd:operation-history', function(args, callback) {

        var calcs_list = calc.list$({}, function(err,list){
            list.forEach(function( foo ){
                return foo.cmd + " " + foo.left + " " + foo.right
            })       
         })

        callback(null, calcs_list)
    })
}