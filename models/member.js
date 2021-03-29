const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Member', memberSchema)



/*
// DB schema
const Schema = mongoose.Schema;
const memberSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Model
const Member = mongoose.model('Member', memberSchema)


const testMember = {
    firstName: 'Tyler',
    lastName: 'Grayson',
    emailAddress: '123@test.com',
    password: 'test'
}

try {
    const newMember = new Member(testMember)
    newMember.save()
    console.log('data saved')
} catch (error) {
    console.log(error)
}
*/