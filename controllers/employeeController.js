const knex = require('../knex');
const Employee = require('../models/Employee');

module.exports={
    getAllemployees: (req,res)=>{
        knex.select('*').from('employee').then(employees=>{
            res.json(employees);
        })
    },
    getemployeeById: (req,res)=>{
        const emp = new Employee();
        emp.searchId(req.params.id)
        knex.select('*').from('employee').where('id',emp.id).then(employee=>{
            res.json(employee);
        })
    },
    createemployee: (req,res)=>{
        const emp = new Employee();
        emp.createEmployee(req.body.fullName,req.body.userId)
        knex('employee').insert(emp).then(employee=>{
            res.json({'message':'employee created successfully'});
        }).catch(err=>{
            res.status(500).json(err);
        });
    },
    updateemployee: (req,res)=>{
        const emp = new Employee();
        emp.updateEmployee(req.body.fullName,req.body.userId)
        knex('employee').where('id',req.params.id).update(emp).then(employee=>{
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