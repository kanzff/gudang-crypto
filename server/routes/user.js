const router = require('express').Router()
const { UserController } = require('../controllers/user.js')
const{ userValidation, validate, loginValidation, userEditValidation } = require('../middlewares/validation.js')

router.get('/', UserController.find)
router.post('/register', userValidation, validate, UserController.add)
router.post('/login', loginValidation, validate, UserController.login)
router.put('/:id', userEditValidation, validate, UserController.update)
router.delete('/:id', UserController.delete)

module.exports = router