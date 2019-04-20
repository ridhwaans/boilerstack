var _ = require('underscore');
var figlet = require('figlet');
var fs = require('fs');
var node_dir = require('node-dir');
var bluebird = require('bluebird');
var yaml = require('js-yaml');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/greeting', (req, res) => {
  let greeting = { greeting: 'Hello World'};
  res.json(greeting);
});

console.log(figlet.textSync('app', 
  {
    font: 'Larry 3D',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }
));

app.listen(port, () => console.log(`Listening on port ${port}`));