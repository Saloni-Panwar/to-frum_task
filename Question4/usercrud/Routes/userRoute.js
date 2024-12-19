const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/usercontroller');

// CRUD Routes
router.get('/', getUsers); 
router.post('/', createUser); 
router.get('/:id', getUserById);
router.delete('/:id', deleteUser); 

module.exports = router;
