const { User, Sequelize } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static find(req, res, next) {
        const { offset, limit, search, is_active } = req.query
        const where = {}

        if (search) where.name = {[Sequelize.Op.iLike]: `%${search}%`}
        if (is_active) where.is_active = {[Sequelize.Op.eq]: is_active}
        
        User.findAll({
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
        
        const { name, email, phone, password, is_active, role} = req.body
        let obj = {
            name,
            email,
            phone,
            password,
            is_active,
            role,
        }
        User.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
    
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) {
                next({name: 'Invalid Email / Password'})
            } else {
                const isValidPass = comparePass(password, user.password)
                if (isValidPass) {
                    const payload = {
                        id: user.id,
                        email: user.email
                    }
                    const access_token = generateToken(payload)
                    const userData = {
                      access_token,
                      email: user.email,
                      role: user.role
                    }
                    return res.status(200).json(userData)
                } else {
                    next({name: 'Invalid Email / Password'})
                }
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    
    // static findUserById(req, res, next) {
    //     let id = req.params.id
    //     User.findByPk(id, {
    //         attributes: {
    //             exclude: ['createdAt', 'updatedAt']
    //         }
    //     })
    //     .then(data => {
    //         if (!data) {
    //             next({message: 'Data Not Found'})
    //         } else {
    //             res.status(200).json(data)
    //         }
    //     })
    //     .catch(err => {
    //         next({message: 'Internal Server Error'})
    //     })
    // }

    static update(req, res, next) {
        let id = req.params.id
        const { name, email, phone, is_active, role} = req.body
        let obj = {
            name,
            email,
            phone,
            is_active,
            role
        }
        User.update(obj, {
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
        User.destroy({
            where: {
                id
            }
        })
        .then(data => {
            if (!data) {
                next({ message: 'Data Not Found'})
            } else {
                res.status(200).json({message: 'User Has Been Succesfully Deleted'})
            }
        })
        .catch(err => {
            next({message: 'Internal Server Error'})
        })
    }

}

module.exports = { UserController }