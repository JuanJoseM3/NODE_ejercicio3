const express = require('express');
const router = express.Router();
const { protectToken, protectEmployee } = require('../middlewares/users.middlewares');
const { repairExists } = require('../middlewares/repairs.middlewares');
const { createRepairValidations, checkValidations } = require('../middlewares/validations.middlewares');

const { getAllPendingRepairs,
        getRepairById, 
        createRepair, 
        updateRepair, 
        deleteRepair } = require('../controllers/repairs.controller');
        
router.post('/', createRepairValidations, checkValidations, createRepair);

router.use(protectToken, protectEmployee);

router.get('/', getAllPendingRepairs);

router
    .use('/:id', repairExists)
    .route('/:id')
    .get(getRepairById)
    .patch(updateRepair)
    .delete(deleteRepair);

module.exports = { repairsRouter: router};