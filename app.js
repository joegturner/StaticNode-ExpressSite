const express = require('express');
const path = require('path');

const mainRoutes = require('./routes');
const errorHandlers = require('./routes/errorhandlers');
var app = express();

/** Middleware **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static('public'));



/** Routes **/
app.use('/', mainRoutes);

app.use(function(req, res, next) {
    const err = new Error('Page not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // res.locals.error = err;
    // res.status(err.status);
    console.log(`${err.status} ${err.message}`);
    return res.send(`Sorry, there was an error: "${err.status} ${err.message}"`);
});

// app.use(errorHandlers.handle404);
// app.use(errorHandlers.handleGlobalError);

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.send("uh oh ");
// });

// set up dev server, 3000 = port number
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});