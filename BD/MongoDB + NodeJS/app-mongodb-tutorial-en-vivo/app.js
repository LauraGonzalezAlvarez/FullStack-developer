//  const patch = require('patch');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
// require('dotenv').config({
//     patch: `./environments/${process.env.SCOPE === 'development' ? process.env.SCOPE : 'production'}.env`
// });

require('dotenv').config();
 
const app = express();

mongoose.connect


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// GET / api/v1/user
app.use('/api/v1', require('./controllers/get.user'));

// GET / api/v1/users
app.use('/api/v1', require('./controllers/get.users'));

// POST / api/v1/user

app.use('/api/v1', require('./controllers/put.user'));

// PUT / api/v1/user/:id
app.use('/api/v1', require('./controllers/delete.user'));

// PATCH / api/v1/user/:id
app.use('/api/v1', require('./controllers/patch.user'));

// DELETE / api/v1/user/:id
app.use('/api/v1', require('./controllers/post.user'));

// app.use('/users', usersRouter);

module.exports = app;
