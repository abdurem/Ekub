const knex = require('../knex');
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken');


module.exports={
    getAllUsers: async (req,res)=>{
        const users = await knex.select('*').from('user')
        res.json(req.user)
    },
    getUserById: async (req,res)=>{
        const UserId = new User;
        UserId.searchId(req.params.id)
        const user = await knex.select('*').from('user').where('id',UserId.id)
        res.json(user);
    },
    createUser: async (req,res)=>{
        try{
            //use bcrypt to encrypt the password
            const hashedPass = await bcrypt.hash(req.body.password, 10)
            const user = new User();
            user.createUser(req.body.phone, req.body.type, hashedPass)
            const checkPhone = await knex.select('phone').from('user').where('phone',req.body.phone)
            if(checkPhone.length > 0){
                res.status(400).json({message: 'Phone number already exists'})
                return;
            }
            await knex('user').insert(user)
            const userInfo = await knex.select('*').from('user').where('phone',req.body.phone)
            jwt.sign({userInfo},'secretkey',{ expiresIn: '10m'},(err,token)=>{
                if(err)
                    return res.status(500).json(err);
                res.json({token, id: userInfo[0].id, type: userInfo[0].type});
            })
            
        }catch{
            res.status(500);
        }
    },
    updateUser: async (req,res)=>{
        try{
            const hashedPass = await bcrypt.hash(req.body.password,10)
            const user = new User();
            user.updateUser(req.body.phone, req.body.type, hashedPass)
            const updatedUser = await knex('user').where('id',req.params.id).update(user);
            if(updatedUser)
                res.json({'message':'User updated successfully'});
        }catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser: async (req,res)=>{
        try{
            const userId = new User();
            userId.searchId(req.params.id)
            const user = await knex('user').where('id',userId.id).first();
            if(!user){
                return res.status(404).json({'message':'User not found'});
            }
            await knex('user').where('id',req.params.id).delete();
            res.json({'message':'User deleted successfully'});
        }catch(err){
            res.status(500).json(err);
        }
    },
    auth: async (req,res)=>{
        try{
            const user = new User();
            user.authUser(req.body.phone, req.body.password);
            const userInfo = await knex.select('*').from('user').where('phone',user.phone);

            if(!userInfo.length)
                return res.status(500).json({success: false ,message:'No user found with the given phone'});
            else
            if(await bcrypt.compare(user.password,userInfo[0].password)){

                jwt.sign({userInfo},'secretkey',{ expiresIn: '10m'},(err,token)=>{
                    if(err)
                        return res.status(500).json(err);
                    res.json({token, id: userInfo[0].id, type: userInfo[0].type});
                })

            }else{
                res.status(401).json({'message':'Wrong phone or password'});
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
}