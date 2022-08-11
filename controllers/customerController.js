const knex = require('../knex');
const Customer = require('../models/Customer');

module.exports={
    getAllcustomers: (req,res)=>{
        knex.select('*').from('customer').then(customers=>{
            res.json(customers);
        })
    },
    getcustomerById: (req,res)=>{
        const cust = new Customer();
        cust.searchId(req.params.id);
        knex.select('*').from('customer').where('id',cust.id).then(customer=>{
            res.json(customer);
        })
    },
    createcustomer: (req,res)=>{
        const cust = new Customer();
        cust.createCustomer(req.body.fullName, req.body.userId, req.body.houseNo, req.body.woreda, req.body.subCity, req.body.city, req.body.status);
        knex('customer').insert(cust).then(customer=>{
            res.json({'message':'customer created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updatecustomer: (req,res)=>{
        const cust = new Customer();
        cust.updateCustomer(req.body.fullName, req.body.userId, req.body.houseNo, req.body.woreda, req.body.subCity, req.body.city, req.body.status);
        knex('customer').where('id',req.params.id).update(cust).then(customer=>{
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