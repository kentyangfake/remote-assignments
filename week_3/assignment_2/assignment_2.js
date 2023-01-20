const express = require('express');
const app = express();

app.get('/getData', (req, res) => {
    let result;
    const num = req.query.number;
    if (num == null){
        res.send('Lack of Parameter');
    }else if(isNaN(num)){
        res.send('Wrong Parameters');
    }else{
    result = ((1 + Number(num)) *Number(num))/2;
        res.send(`${result}`);
    }
    
});

app.listen(3000, () => {
    console.log('app running on localhost:3000');
});