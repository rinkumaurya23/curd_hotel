const express = require('express');
const router = express.Router();
const Person = require('../models/person')



router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log(`data saved!!`);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error !!" })
    }
});

router.get('/', async (req, res) => {

    try {
        const data = await Person.find();
        console.log(`data fetch!!`);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "internal server Error" })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidatores: true
        })
        if (!response) {
            return res.status(404).json({ error: "Person not Found" });
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error !!" })
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not Found" });
        }
        console.log('data Deleted');
        res.status(200).json({ message: "Person Deleted Successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


module.exports = router;