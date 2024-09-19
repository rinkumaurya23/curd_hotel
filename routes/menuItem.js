const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu')


router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenu = new MenuItem(data);

        const response = await newMenu.save();
        console.log(`Menu Item saved!!`);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error !!" })
    }
});
router.get('/', async (req, res) => {

    try {
        const data = await MenuItem.find();
        console.log(`MenuItem fetch!!`);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "internal server Error" })
    }
})


module.exports = router;