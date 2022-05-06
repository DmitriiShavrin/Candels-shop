const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    name: String,
    email: String,
    pass: String,
    login_date: { type: String, default: '' },
    token: { type: String, default: '' }
});

module.exports = model('users', schema);