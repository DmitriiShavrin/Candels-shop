const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    id: String,
    date: String, 
    items: Array,
    total: Number,
    name: String,
    last_name: String,
    city: String,
    adress: String,
    zip: Number,
    delivery: String,
    company_name: String,
    phone: String,
    mail: String,
    notes: String
});

module.exports = model('cart', schema);
