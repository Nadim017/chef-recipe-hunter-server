const express = require('express');
const chefData = require('./data/chefData.json');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello from the other side after updated nodemon');
});
app.get('/chef', (req, res) => {
  res.send(chefData);
});
app.listen(port, () => {
  console.log('listening on port after added nodemon', port);
});
