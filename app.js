'use strict'; 

const express = require('express'); 
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')); 

app.get('/sum', (req, res) => {
  const {a, b} = req.query;
  const numA = Number(a);
  const numB = Number(b); 
  const c = numA + numB;

  res.send(`The sum of ${a} and ${b} is ${c}`); 
}); 

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});