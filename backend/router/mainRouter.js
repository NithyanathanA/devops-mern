import express from 'express';
import { addUser, getUser } from '../controller/userController.js';

const router      = express.Router();

router.post('/post',async(req,res) => {
    await addUser()
    res.send("work")
})

router.get("/get-user", async(req, res) => {
    
    const user = await getUser(req);
    res.send(user)
})

export default router