const express = require('express')
const app = express()
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

const port = 3000
const facts = require('./data/facts.json' )
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let max = facts.fact.length -1;

app.get('/', (req, res) => {
  let int = getRandomIntInclusive(1, max)
  console.log("~", int)
  res.render('index', facts.fact[int])
 })

app.listen(port, () => {
  console.log('To infinity and beyond!');
});
