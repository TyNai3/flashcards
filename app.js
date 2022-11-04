require('@babel/register');
const express = require('express');
const ssr = require('./midleware/ssr');

const app = express();

const mainRouter = require('./routes/mainRouter');
const topicRouter = require('./routes/topicRouter');
const questionsRouter = require('./routes/questionRouter');



app.use(express.static('public'));
app.use(ssr);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Подключить Роутеры
const registrationRouter = require('./routes/render/registrationRouter');
const registrationApiRouter = require('./routes/api/regRouter');
//* Запустить роутеры

app.use('/', mainRouter);
app.use('/topics', topicRouter);
app.use('/', registrationApiRouter);
app.use('/registration', registrationRouter);

app.use('/', questionsRouter);

const PORT = 3000;

app.listen(PORT, () => console.log('server working'));
