/*
* 404 and Global Error Handlers
*/

// Error handler for handling non-existent routes
const handle404 = (req, res, next) => {
    console.log('handling 404');
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. Looks like that route does not exist.';

    next (err);
}

const handleGlobalError = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
}

  
module.exports = { handle404, handleGlobalError};