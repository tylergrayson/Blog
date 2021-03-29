const express = require('express')
const Member = require('./../models/member')
const router = express.Router()

router.get('/register', (req, res) => {
    res.render('registration/register', { member: new Member() })
})


// need to fix this post to redirect to index page
router.post('/', async (req, res, next) => {
    req.member = new Member()
    next()
},  saveMemberAndRedirect('register'))


function saveMemberAndRedirect(path) {
    return async (req, res) => {
        let member = req.member
        member.firstName = req.body.firstName
        member.lastName = req.body.lastName
        member.emailAddress = req.body.emailAddress
        member.password = req.body.password
        try {
            member = await member.save()
            res.redirect('/articles/index')
        } catch (error) {
            res.render(`registration/${path}`, { member: member})
        }
    }
}

module.exports = router