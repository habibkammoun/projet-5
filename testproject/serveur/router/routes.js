import express from 'express';
import { createUser, getUsers } from '../controles/actions.js';
const router=express.Router();


router.get('/:name',getUsers);
router.post('/',createUser);

export default router;