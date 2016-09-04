var seneca = require('seneca')()
seneca.add({role: 'math', cmd: 'sum'}, function(args, callback) {
    var answer = parseInt(args.left, 10) + parseInt(args.right, 10);
    callback(null, { answer: answer });
});

module.exports = seneca;