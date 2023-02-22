const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const { people } = require('./data.js');

app.locals = {
  title: 'Error Handling Exploration',
  people
}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/v1/people', (req, res) => {
  res.status(200).json(app.locals.people);
});

app.post('/api/v1/people', (req, res) => {
  return generalPost(req, res);
});

app.get('/api/v1/500-response', (req, res) => {
  res.status(500).json({ error: 'Mock 500 Internal Server Error' });
});

app.post('/api/v1/500-response', (req, res) => {
  return generalPost(req, res, 500);
});

const generalPost = (req, res, status) => {
  const newPerson = req.body;

  for (let requiredParameter of ['id', 'fun_fact']) {
    if (!newPerson[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }
  
  if (status === 500) {
    return res.status(status).json({ error: '500 Mock Internal Server Error' });
  }

  const { id, name, fun_fact } = newPerson;
  app.locals.people = [...app.locals.people, { id, name, fun_fact }];

  return res.status(201).json({ id, name,  fun_fact });
}

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});