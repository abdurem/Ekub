const knex = require('../knex');

module.exports={
    getAllcust_equbs: (req,res)=>{
        knex.select('*').from('custequb').then(cust_equbs=>{
            res.json(cust_equbs);
        })
    },
    getcust_equbById: (req,res)=>{
        knex.select('*').from('custequb').where('id',req.params.id).then(cust_equb=>{
            res.json(cust_equb);
        })
    },
    createcust_equb: (req,res)=>{
        knex('custequb').insert(req.body).then(cust_equb=>{
            res.json({'message':'cust_equb created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updatecust_equb: (req,res)=>{
        knex('custequb').where('id',req.params.id).update(req.body).then(cust_equb=>{
            res.json({'message':'cust_equb updated successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    deletecust_equb: (req,res)=>{
        knex('custequb').where('id',req.params.id).delete().then(cust_equb=>{
            res.json({'message':'cust_equb deleted successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    }
}