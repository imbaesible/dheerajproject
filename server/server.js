const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
 try{
    const { n1, n2, operator } = req.body;
  
    let result;
  
    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === '*') {
      result = n1 * n2;
    } else if (operator === '/') {
      result = n1 / n2;
    }
  
    res.json({ result });
 }catch(err){
     res.status(400).json({message: err.message})
 }
});

app.listen(3001,()=>console.log("Server started on port 3001"))