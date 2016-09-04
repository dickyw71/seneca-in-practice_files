module.exports = function math ( options ) {
    this.add('role:math, cmd:sum', function(args, callback) {
        var answer = parseInt(args.left, 10) + parseInt(args.right, 10);
        callback(null, { answer: answer });
    });
}