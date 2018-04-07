var _ = require('underscore');
var figlet = require('figlet');
var fs = require('fs');
var node_dir = require('node-dir');
var bluebird = require('bluebird');
var yaml = require('js-yaml');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/hello', (req, res) => {
  let hello = { node-app: 'Hello World'};
  res.json(hello);
});

app.listen(port, () => console.log(`Listening on port ${port}`));