module.exports = function math ( options ) {

    this.add('role:math, cmd:sum', function(args, callback) {
        var sum = parseFloat(args.left) + parseFloat(args.right);
        callback(null, { answer: sum });
    });


    this.add('role:math, cmd:sum', function(args, callback) {

        if(!isFinite(args.left) || !isFinite(args.right)) {
            return callback(new Error('Expected left and right to be numbers.'))
        }

        this.prior({
            role: 'math',
            cmd: 'sum',
            left: args.left,
            right: args.right
        }, function(err, result) {
            if (err) return callback(err)

            var info = args.left + '+' + args.right
            callback(null, { answer: result.answer, info: info });
        })
    });
}