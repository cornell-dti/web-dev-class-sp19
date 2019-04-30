const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request.  This is what you sent me:
    $(req.body.post)`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
