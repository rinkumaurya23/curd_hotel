const mongoose = require('mongoose')


// define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    age: {
        type: Number,

    },
    work: {
        type: String,
        enum: ['chief', 'waiter', 'manager'],
        requied: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Person = mongoose.model('person', personSchema)
module.exports = Person;