const express = require('express');
const port = process.env.A_PORT || 5001;
const admin = require('./route/admin');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.get('/', (req, res) => {
    console.log(req.body)
    res.json({'success': true});
})

//admin auth
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', admin)

app.listen(port, ()=>{
    console.log('Server is running on port http://localhost:'+port);
}) 