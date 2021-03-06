const express = require('express');
const path = require('path');
const helmet = require('helmet');

const mainRoutes = require('./routes');
const app = express();

/** Middleware **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use(helmet());

/** Routing **/
app.use('/', mainRoutes);

// catch 404 error
app.use(function(req, res, next) {
    const err = new Error('Page not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(`${err.status} ${err.message}`);
    res.render('error', {error: err});
});

// set up dev server, 3000 = port number
// app.listen(3000, () => {
//     console.log('The application is running on localhost:3000');
// });
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });