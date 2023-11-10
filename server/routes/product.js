const router = require('express').Router()
const { ProductController } = require('../controllers/product.js')

router.get('/', ProductController.findProduct)
router.post('/', ProductController.addProduct)
// router.get('/:id', ProductController.findTodoById)
router.put('/:id', ProductController.update)
// router.patch('/:id', ProductController.editStatus)
router.delete('/:id', ProductController.delete)


module.exports = router