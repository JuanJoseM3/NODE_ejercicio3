const express = require('express');
const router = express.Router();
const { protectToken, userExists, protectAccountOwner } = require('../middlewares/users.middlewares');
const { createUserValidations, checkValidations } = require('../middlewares/validations.middlewares');

const { getAllUsers, 
        getUserById, 
        createUser, 
        updateUser, 
        deleteUser,
        login } = require('../controllers/users.controller');

router.post('/login', login);
router.post('/', createUserValidations, checkValidations, createUser);

router.use(protectToken);

router.get('/', getAllUsers);

router
    .use('/:id', userExists)
    .route('/:id')
    .get(getUserById)
    .patch(protectAccountOwner, updateUser)
    .delete(protectAccountOwner, deleteUser);

module.exports = { usersRoter: router };