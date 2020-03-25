const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


router.get('/', (req, res, next) => {
    res.render('index', {projects});
})

router.get('/about', (req, res) => {
    console.log('About page');
    res.render('about');
});

router.get('/:id', (req, res, next) => {
    const projId = req.params.id;
    const project = projects.find( ({id}) => id === +projId);
    if (project) {
        console.log('proj');
        res.render('project', {project});
    } else {
        const err = new Error('Page not found');
        err.status = 404;
        return next(err);
    }
});

module.exports = router;