const router = require('express').Router()
const { UserController } = require('../controllers/user.js')
const{ userValidation, validate } = require('../middlewares/validation.js')

router.get('/', UserController.find)
router.post('/', userValidation, validate, UserController.add)
router.put('/:id', userValidation, validate, UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router