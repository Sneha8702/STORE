import express from 'express'
import { Admin} from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from'bcrypt'
import { Student } from '../models/Student.js';
const router = express.Router();

router.post('/login',async(req,res)=> {
    const {username , password,role} =req.body;
    if(role==='Admin'){
        const admin = await Admin.findOne({username})
        if(!admin){
           return res.json({message:"admin not registered",login:false })
        }
        const validPassword = await bcrypt.compare(password,admin.password)
        if(!validPassword){
            return res.json({message:"wrong password" ,login:false})
        }
        const token = jwt.sign({username: admin.username, role:'admin'},process.env.Admin_Key)
        res.cookie('token',token, {httpOnly:true , secure:true})
        return res.json({login:true ,role:'admin'})
        } 
    else if(role ==='student'){
        const admin = await Student.findOne({username})
        if(!admin){
           return res.json({message:"student not registered",login:false})
        }
        const validPassword = await bcrypt.compare(password,admin.password)
        if(!validPassword){
            return res.json({message:"wrong password",login:false})
        }
        const token = jwt.sign({username: admin.username, role:'student'},process.env.Admin_Key)
        res.cookie('token',token, {httpOnly:true , secure:true})
        return res.json({login:true ,role:'student'})
    }else {

    }

})
export {router  as AdminRouter}
