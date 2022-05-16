const { body, validationResult } = require('express-validator');

const createUserValidations = [
    body('name').notEmpty().withMessage('Name can\'t be empty'),
    body('email').notEmpty().withMessage('Email can\'t be empty')
                 .isEmail().withMessage('Must provide a valid email'),
    body('password').notEmpty().withMessage('Please introduce a password')
                    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters length')
];

const createRepairValidations = [
    body('date').notEmpty().withMessage('Must provide the date of the order reception').isDate().withMessage('Type a correct date format yyyy-mm-dd'),
    body('computerNumber').notEmpty().withMessage('Please provide a computer number').isNumeric().withMessage('Information must be a number'),
    body('comments').notEmpty().withMessage('Write a description of the order details')
]

const checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const messages = errors.array().map(({ msg }) => msg);
        const errorDescription = messages.join(', ');

        return res.status(400).json({
            status: 'Error',
            message: errorDescription
        })
    }
    next();
}

module.exports = { createUserValidations, createRepairValidations, checkValidations };