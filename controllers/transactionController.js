const knex = require('../knex');

module.exports={
    getAlltransactions: (req,res)=>{
        knex.select('*').from('transaction').then(transactions=>{
            res.json(transactions);
        })
    },
    gettransactionById: (req,res)=>{
        knex.select('*').from('transaction').where('id',req.params.id).then(transaction=>{
            res.json(transaction);
        })
    },
    createtransaction: (req,res)=>{
        knex('transaction').insert(req.body).then(transaction=>{
            res.json({'message':'transaction created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updatetransaction: (req,res)=>{
        knex('transaction').where('id',req.params.id).update(req.body).then(transaction=>{
            res.json({'message':'transaction updated successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    deletetransaction: (req,res)=>{
        knex('transaction').where('id',req.params.id).delete().then(transaction=>{
            res.json({'message':'transaction deleted successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    }
}