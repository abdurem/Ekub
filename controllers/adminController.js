const knex = require('../knex');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function authAdmin( req, res ){
    var password = await knex.select('password').from('admin').where('username', 'kinan');
    password = password[0].password
    if( password ){
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