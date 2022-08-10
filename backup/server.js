const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knex');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:false }));

app.get('/user', (req, res) => {
    knex.select().from('user').then(user=>{
        res.send(user);
    })
})

app.get('/:table/:id',(req,res)=>{
    knex.select().from(req.params.table).where('id',req.params.id).then(table=>{
        res.send(table);
    })
})

app.post('/employee',(req,res)=>{
    // res.send(req.body);

    //select last raw

    async function selectLastRaw(){
        await knex.select('*').from('employee').orderBy('id','desc').limit(1).then(last=>{
            console.log(last[0].id);
        })
    }
    console.log('the promise',selectLastRaw().then(last=>{console.log('final product',last);})); 

    // knex.raw(`INSERT INTO user (phone,type,password) VALUES ('${req.body.phone}','${req.body.type}','${req.body.password}')`).then(user=>{
    //     res.send(user);
    // })

    // if(req.body.type==='employee'){
    //     knex.raw(`INSERT INTO customer (fullName,userId) VALUES ('${req.body.fullName}','')`).then(customer=>{
    //         res.send(customer);
    //     })
    // }
})

app.listen(port,()=>{
    console.log("listning on http://localhost:"+port);
})