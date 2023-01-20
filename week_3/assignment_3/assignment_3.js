const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello My Server!');
});

app.get('/getData', (req, res) => {
    let result;
    const num = req.query.number;
    if (num == null){
        res.render('inputForm');
    }else if(isNaN(num)){
        res.send('Wrong Parameters');
    }else{
        res.locals.sum = ((1 + Number(num)) *Number(num))/2;
        res.render('inputForm');
    }
});

app.post('/getData',(req, res)=>{
    let num = req.body.inputValue;
    res.locals.sum = ((1 + Number(num)) *Number(num))/2;
    res.render('inputForm');
});

app.listen(3000, () => {
    console.log('app running on localhost:3000');
});