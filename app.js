require('@babel/register');
const express = require('express');
const ssr = require('./midleware/ssr');

const app = express();

const mainRouter = require('./routes/mainRouter');
const topicRouter = require('./routes/topicRouter');

app.use(express.static('public'));
app.use(ssr);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/', mainRouter);
app.use('/topics', topicRouter);

const PORT = 3000;

app.listen(PORT, () => console.log('server working'));
