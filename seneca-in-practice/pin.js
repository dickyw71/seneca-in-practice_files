module.exports = function math ( options ) {
    this.add('role:math, cmd:sum', function(args, callback) {
        var sum = parseFloat(args.left) + parseFloat(args.right);
        callback(null, { answer: sum });
    });

    this.add('role:math, cmd:sum, integer:true', function(args, callback) {
        var sum = parseFloat(Math.floor(args.left)) + parseFloat(Math.floor(args.right));
        callback(null, { answer: sum });
    });

    this.add('role:math, cmd:product', function(args, callback) {
        var product = parseInt(args.left, 10) * parseInt(args.right, 10);
        callback(null, { answer: product });
    })

    this.wrap('role:math', function(args, callback) {

        // convert args[2] and args[3] to Number
        args.left = Number(args.left)
        args.right = Number(args.right)
        // call all the prior matching patterns
        this.prior(args, callback)
    })
}