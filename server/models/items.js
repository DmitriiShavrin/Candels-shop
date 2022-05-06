const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    title: String,
    photo: String,
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    discription: String,
    count: Number
});

module.exports = model('items', schema);
