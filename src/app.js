const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const v1 = require('./routes/v1');


app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', v1);

app.get('/hello', (req,res)=>{
    res.send('Task manager app')
})
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app;
