const router = require('express').Router()
const { ProductController } = require('../controllers/product.js')
const{ productValidation, validate } = require('../middlewares/validation.js')

router.get('/', ProductController.find)
router.post('/', productValidation, validate, ProductController.add)
router.put('/:id', productValidation, validate, ProductController.update)
router.delete('/:id', ProductController.delete)
// router.post('/', [
//     check('name')
//         .notEmpty().withMessage('Name cannot be empty'),
//     check('image')
//         .notEmpty().withMessage('Image cannot be empty'),
//     check('price')
//         .notEmpty().withMessage('Price cannot be empty')
//         .isInt().withMessage('Price must be a number')
// ], (req, res, next) => {
//     const validationErrors = validationResult(req)
//     if (!validationErrors.isEmpty()) return res.status(400).json({ errors: validationErrors.array()})
//     next()
// }, ProductController.addProduct)
// router.get('/:id', ProductController.findTodoById)
// router.patch('/:id', ProductController.editStatus)


module.exports = router