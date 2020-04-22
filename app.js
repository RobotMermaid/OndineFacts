const express = require('express')
const app = express()

const port = 3000
const facts = require('./models/facts' )

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
let int = getRandomIntInclusive(1, 3);

app.get('/', (req, res) => {
  res.send(facts.facts[int])
});


// app.get('/jean', (req, res) => {
//      res.render('index', data.artist[2])
//  })

app.listen(port, () => {
  console.log('To infinity and beyond!');
});
