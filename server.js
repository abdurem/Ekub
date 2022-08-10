const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// import fetch from 'node-fetch';

const userRoute = require('./route/user');
const employeeRoute = require('./route/employee');
const customerRoute = require('./route/customer');
const equbRoute = require('./route/equb');
const transactionRoute = require('./route/transaction');
const cust_equbRoute = require('./route/cust-equb');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user', userRoute);
app.use('/api/employee',employeeRoute);
app.use('/api/customer',customerRoute);
app.use('/api/equb',equbRoute);
app.use('/api/transaction',transactionRoute);
app.use('/api/cust-equb',cust_equbRoute);

// function getUser(id) {
//     fetch('http://localhost:3000/api/user/'+id)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// getUser(1);


app.listen(port, ()=>{
    console.log('Server is running on port http://localhost:'+port);
})