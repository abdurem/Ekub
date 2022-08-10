const knex = require('../knex');

module.exports={
    getAllemployees: (req,res)=>{
        knex.select('*').from('employee').then(employees=>{
            res.json(employees);
        })
    },
    getemployeeById: (req,res)=>{
        knex.select('*').from('employee').where('id',req.params.id).then(employee=>{
            res.json(employee);
        })
    },
    createemployee: (req,res)=>{
        knex('employee').insert(req.body).then(employee=>{
            res.json({'message':'employee created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updateemployee: (req,res)=>{
        knex('employee').where('id',req.params.id).update(req.body).then(employee=>{
            res.json({'message':'employee updated successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    deleteemployee: (req,res)=>{
        knex('employee').where('id',req.params.id).delete().then(employee=>{
            res.json({'message':'employee deleted successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    }
}