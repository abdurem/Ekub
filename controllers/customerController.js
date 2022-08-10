const knex = require('../knex');

module.exports={
    getAllcustomers: (req,res)=>{
        knex.select('*').from('customer').then(customers=>{
            res.json(customers);
        })
    },
    getcustomerById: (req,res)=>{
        knex.select('*').from('customer').where('id',req.params.id).then(customer=>{
            res.json(customer);
        })
    },
    createcustomer: (req,res)=>{
        knex('customer').insert(req.body).then(customer=>{
            res.json({'message':'customer created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updatecustomer: (req,res)=>{
        knex('customer').where('id',req.params.id).update(req.body).then(customer=>{
            res.json({'message':'customer updated successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    deletecustomer: (req,res)=>{
        knex('customer').where('id',req.params.id).delete().then(customer=>{
            res.json({'message':'customer deleted successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    }
}