require('@babel/register');
const express = require('express');
const ssr = require('./midleware/ssr');

const app = express();
app.use(express.static('public'));
app.use(ssr);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log('server working'));
