const User = require('models/user').User;

const user = new User({
    username: "Tester2",
    password: "secret"
});

user.save(function(err, user, affected) {
    if (err) throw err;

    User.findOne({username: "Tester"}, function(err, tester) {
        console.log(tester);
    });
});