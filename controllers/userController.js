const knex = require('../knex');
const bcrypt = require('bcrypt')

module.exports={
    getAllUsers: async (req,res)=>{
        const users = await knex.select('*').from('user')
        res.json(users)
    },
    getUserById: async (req,res)=>{
        const user = await knex.select('*').from('user').where('id',req.params.id)
        res.json(user);
    },
    createUser: async (req,res)=>{
        try{
            //use bcrypt to encrypt the password
            const hashedPass = await bcrypt.hash(req.body.password, 10)
            const user = {phone: req.body.phone, type: req.body.type, password: hashedPass}
            const checkPhone = await knex.select('phone').from('user').where('phone',req.body.phone)
            if(checkPhone.length > 0){
                res.status(400).json({message: 'Phone number already exists'})
                return;
            }
            await knex('user').insert(user)
            const userInfo = await knex.select('*').from('user').where('phone',req.body.phone)
            res.json({'message':'User created successfully','id':userInfo[0].id, 'type':userInfo[0].type});
            
        }catch{
            res.status(500);
        }
    },
    updateUser: async (req,res)=>{
        try{
            const hashedPass = await bcrypt.hash(req.body.password,10)
            const updateUser = {name: req.body.name, type: req.body.type, password: hashedPass}
            const user = await knex('user').where('id',req.params.id).update(updateUser);
            if(user)
                res.json({'message':'User updated successfully'});
        }catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser: async (req,res)=>{
        try{
            const user = await knex('user').where('id',req.params.id).first();
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
            const user = await knex.select('*').from('user').where('phone',req.body.phone);
            // if(!user.length)
            //     return res.status(500).json({'message':'Invalid credentials'});
            if(await bcrypt.compare(req.body.password,user[0].password)){
                res.json(user[0].type);
            }else{
                res.status(500).json({'message':'Invalid credentials'});
            }
        }catch(err){
            res.status(500).json(err);
        }
    }
}