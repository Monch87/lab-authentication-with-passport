const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

const ensureLogin = require('connect-ensure-login')

router.get('/profile', ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render('auth/private', { user: req.user })
})


module.exports = router
