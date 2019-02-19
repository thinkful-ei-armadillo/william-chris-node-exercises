'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// drill number 1

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const numA = Number(a);
  const numB = Number(b);
  const c = numA + numB;

  res.send(`The sum of ${a} and ${b} is ${c}`);
});


// drill number 2
app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = Number(req.query.shift);

  let result = '';

  // This method returns a string and not a String object.
  // Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), rather than as a method of a String object you created.

  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) + shift);
  }
  res.send(result);

});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});