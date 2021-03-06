const { Router } = require('express');
const Items = require('../models/items');
const path = require('path');

const router = Router();

// All items

router.get('/', async(req, res)=>{
    res.send({status: 'ok', body: await Items.find()})
});

// Create item

router.post('/', async(req, res)=>{
    const Check = await Items.findOne({title: req.body.title});
    if (!Check) {
        let filename = '';
        if (req.files?.photo) {
            filename = Date.now() + path.extname(req.files.photo.name);
            req.files.photo.mv('img/' + filename)
        }
        if (await Items.create({...req.body, photo: filename })) {
            res.send({ status: 'ok' })
        } else {
            res.send({ status: 'error' })
        }
    } else {
        res.send({ status: 'already' })
    }
});

//delete items
router.delete('/:_id', async(req, res)=>{
    await Items.deleteOne(req.params)
    res.send({status: 'ok', body: await Items.find()})
});

// update items
router.put('/:_id', async(req, res) => {
    let filename = '';
    if (req.files?.photo) {
        filename = Date.now() + path.extname(req.files.photo.name);
        req.files.photo.mv('img/' + filename);
    }
    await Items.updateOne(req.params, {...req.body, photo: filename ? filename : req.body.photo });
    res.send({status: 'ok', body: await Items.find()});
});

module.exports = router;