const { Router } = require('express');

const router = Router();
const Cart = require('../models/cart');

// create orders
router.post('/make_order', async(req, res) => {
    res.send({status: 'ok', body:  await Cart.create({ date: new Date().toLocaleString(), items: Cart, total: req.body.total })})
});

//get all orders
router.get('/', async(req, res) => {
    res.send({status: 'ok', body: await Cart.find()})
});

module.exports = router;