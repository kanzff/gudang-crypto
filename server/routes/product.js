const router = require('express').Router()
const { ProductController } = require('../controllers/product.js')
const { productValidation, validate } = require('../middlewares/validation.js')
const { authenticate } = require('../middlewares/auth.js')


router.get('/', ProductController.find)
router.use(authenticate)
router.post('/', productValidation, validate, ProductController.add)
router.put('/:id', productValidation, validate, ProductController.update)
router.delete('/:id', ProductController.delete)


module.exports = router