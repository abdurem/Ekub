const knex = require('../knex');

module.exports={
    getAllequbs: (req,res)=>{
        knex.select('*').from('equb').then(equbs=>{
            res.json(equbs);
        })
    },
    getequbById: (req,res)=>{
        knex.select('*').from('equb').where('id',req.params.id).then(equb=>{
            res.json(equb);
        })
    },
    createequb: (req,res)=>{
        knex('equb').insert(req.body).then(equb=>{
            res.json({'message':'equb created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updateequb: (req,res)=>{
        knex('equb').where('id',req.params.id).update(req.body).then(equb=>{
            res.json({'message':'equb updated successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    deleteequb: (req,res)=>{
        knex('equb').where('id',req.params.id).delete().then(equb=>{
            res.json({'message':'equb deleted successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    }
}