const api = require('./api.js')
const express = require('express');
const app = express();

app.get('/class/:classID', (req, res) => {
  let classID = req.params['classID'];

  api.getClassDetails(classID, (err, response) => {
    res.send(response);
  });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
