module.exports = function math ( options ) {
    this.add('role:math, cmd:sum', function(args, callback) {
        var sum = parseInt(args.left, 10) + parseInt(args.right, 10);
        callback(null, { answer: sum });
    });

    this.add('role:math, cmd:product', function(args, callback) {
        var product = parseInt(args.left, 10) * parseInt(args.right, 10);
        callback(null, { answer: product });
    })
}