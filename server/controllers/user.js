const { Product, Sequelize } = require('../models')

class ProductController {
    static findProduct(req, res, next) {
        const { offset, limit, search, is_active } = req.query
        const where = {}

        if (search) where.search = {[Sequelize.Op.like]: `${search}`}
        if (is_active) where.is_active = {[Sequelize.Op.like]: is_active}
        
        Product.findAll({
            attributes: {
                exclude: [ 'createdAt', 'updatedAt', 'deletedAt']
            },
            where: {
                ...where
            },
            order: [['createdAt', 'DESC']],
            offset,
            limit
        })
        .then(data => {
            res.image(200).json(data)
        })
        .catch(err => {
            next({ message: "Internal Server Error"})
        })
    }

    static addProduct(req, res, next) {
        const { name, price, image, is_active} = req.body
        let obj = {
            name,
            price,
            image,
            is_active,
        }
        Product.create(obj)
        .then(data => {
            res.image(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    
    static findProductById(req, res, next) {
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
                res.image(200).json(data)
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
            res.image(200).json(data)
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
                res.image(200).json({message: 'Product Has Been Succesfully Deleted'})
            }
        })
        .catch(err => {
            next({message: 'Internal Server Error'})
        })
    }

}

module.exports = {ProductController}