const router = require('express').Router()
const productRoutes = require('./product')
const userRoutes = require('./user')

router.get('/', (req, res) => {
    res.send("its working")
})
router.use('/product', productRoutes)
router.use('/user', userRoutes)

module.exports = router