import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';


//initializing router
const router = express.Router();

//getting all users
//all routes in here are starting with /users
router.get('/', getUsers);

//creating a user
router.post('/', createUser);

//finding user using their ID
router.get('/:id', getUser);

//deleting a user
router.delete('/:id', deleteUser);

//updating a user only some part --> PATCH
//entirely updating (overwriting) --> PUT
router.patch('/:id', updateUser);

export default router;