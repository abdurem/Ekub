const knex = require('../knex');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function authAdmin( req, res ){
    var password = await knex.select('password').from('admin').where('username',req.body.username);
    if( password[0] != null ){
        password = password[0].password
        if(password === req.body.password){
            res.json({success: true})
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