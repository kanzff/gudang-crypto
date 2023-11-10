const{ check, validationResult } = require('express-validator')

const productValidation =  [
    check('name')
        .notEmpty().withMessage('Name cannot be empty'),
    check('image')
        .notEmpty().withMessage('Image cannot be empty'),
    check('price')
        .notEmpty().withMessage('Price cannot be empty')
        .isInt().withMessage('Price must be a number')
]

const userValidation =  [
    check('name')
        .notEmpty().withMessage('Name cannot be empty'),
    check('email')
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Email format is incorrect'),
    check('phone')
        .notEmpty().withMessage('Phone cannot be empty'),
]

const validate = (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) return res.status(400).json({ errors: validationErrors.array()})
    next()
}

module.exports = {
    productValidation,
    userValidation,
    validate,
}


