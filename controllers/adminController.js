const knex = require('../knex');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function authAdmin( req, res ){
    var admin = await knex.select('*').from('admin').where('username',req.body.username);
    if( admin[0] != null ){
        admin = admin[0]
        if(admin.password === req.body.password){
            jwt.sign({admin},'secretkey',{ expiresIn: '100m'},(err,token)=>{
                if(err)
                    return res.status(500).json(err);
                res.json({token, id: admin.id, type: admin.username});
            })
        }
        else
            res.json({success: false})
    }
    else
        res.json({'message': false})
}

module.exports ={ 
    authAdmin
};