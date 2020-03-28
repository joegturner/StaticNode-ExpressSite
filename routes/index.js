const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// home page route
router.get('/', (req, res, next) => {
    res.render('index', {projects});
})

// about page route
router.get('/about', (req, res) => {
    res.render('about');
});

// projects page route
router.get('/:id', (req, res, next) => {
    const projId = req.params.id;
    const project = projects.find( ({id}) => id === +projId);
    
    if (project) {
        res.render('project', {project});
    } else {
        // catch an error if URL extends passed an ID
        // i.e. localhost:3000/1/nopage
        const err = new Error('Page not found');
        err.status = 404;
        return next(err);
    }
});

module.exports = router;