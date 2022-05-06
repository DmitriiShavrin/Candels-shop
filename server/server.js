const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const itemsRoute = require('./routes/itemsRoute');
const cartRoute = require('./routes/cartRoute');
const usersRoute = require('./routes/usersRoute');

const App = express();

App.use(cors());
App.use(express.json());
App.use(fileUpload());
App.use('/img', express.static('img'))

App.use('/items', itemsRoute);
App.use('/cart', cartRoute);
App.use('/users', usersRoute);

mongoose.connect('mongodb://localhost/candels', () => {
    console.log('DB connected')
});

App.get('/', (req, res) => {
    res.send('ok')
});


App.listen(5000, 'localhost', () => {
    console.log('Server running ....')
});