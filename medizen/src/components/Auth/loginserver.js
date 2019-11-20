const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, email, password } = req.body;
    if (username, email, password) {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/strains', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(strains);
  }, 1000);
});

app.get('/api/strains/:id', authenticator, (req, res) => {
  const strains = strains.find(f => f.id == req.params.id);

  if (strain) {
    res.status(200).json(strain);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/strains', authenticator, (req, res) => {
  const strain = { id: getNextId(), ...req.body };

  strains = [...strains, strain];

  res.send(strains);
});

app.put('/api/strains/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const strainIndex = strains.findIndex(f => f.id == id);

  if (strainIndex > -1) {
    const strain = { ...strains[strainIndex], ...req.body };

    strains = [
      ...strains.slice(0, strainIndex),
      strain,
      ...strains.slice(strainIndex + 1)
    ];
    res.send(strains);
  } else {
    res.status(404).send({ msg: 'Strain not found' });
  }
});

app.delete('/api/strains/:id', authenticator, (req, res) => {
  const { id } = req.params;

  strains = strains.filter(f => f.id !== Number(id));

  res.send(strains);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
}); 