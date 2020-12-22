const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const UserSchema = mongoose.Schema({
    username: String,
    icon: String,
    password: String,
})

module.exports = mongoose.model('Users', UserSchema);