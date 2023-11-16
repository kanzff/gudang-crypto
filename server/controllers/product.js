const { Product, Sequelize } = require('../models')


class ProductController {
    static find(req, res, next) {
        const { offset, limit, search, is_active } = req.query
        const where = {}

        if (search) where.name = {[Sequelize.Op.iLike]: `%${search}%`}
        if (is_active) where.is_active = {[Sequelize.Op.eq]: is_active}
        
        Product.findAll({
            attributes: {
                exclude: [ 'updatedAt', 'deletedAt']
            },
            where: {
                ...where
            },
            order: [['createdAt', 'DESC']],
            offset,
            limit
        })
        .then(data => {
            res.status(200).json(data)
            // version 2??
            // res.status(200).send({
            //     code: 200,
            //     message: "Success",
            //     data,
            // })

        })
        .catch(err => {
            next({ message: "Internal Server Error"})
        })
    }

    static add(req, res, next) {
        
        // check('name')
        // .notEmpty().withMessage('Name cannot be empty')
        // const validationErrors = validationResult(req)
        // if (!validationErrors.isEmpty()) return res.status(400).json({ errors: validationErrors.array()})
        
        const { name, price, image, is_active} = req.body
        let obj = {
            name,
            price,
            image,
            is_active,
        }
        Product.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    
    static findById(req, res, next) {
        let id = req.params.id
        Product.findByPk(id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        .then(data => {
            if (!data) {
                next({message: 'Data Not Found'})
            } else {
                res.status(200).json(data)
            }
        })
        .catch(err => {
            next({message: 'Internal Server Error'})
        })
    }

    static update(req, res, next) {
        let id = req.params.id
        const { name, price, image, is_active} = req.body
        let obj = {
            name,
            price,
            image,
            is_active
        }
        Product.update(obj, {
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next({message: 'Internal Server Error'})
        })
    }
    
    static delete(req, res, next) {
        let id = req.params.id
        Product.destroy({
            where: {
                id
            }
        })
        .then(data => {
            if (!data) {
                next({ message: 'Data Not Found'})
            } else {
                res.status(200).json({message: 'Product Has Been Succesfully Deleted'})
            }
        })
        .catch(err => {
            next({message: 'Internal Server Error'})
        })
    }

}

module.exports = { ProductController }