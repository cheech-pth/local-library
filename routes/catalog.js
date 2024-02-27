const express = require("express")
let router = express.Router()

// Catalog homepage
router.get('/', function(req, res, next) {
    res.send("Hello world!")
})

// Post request for submitting data
router.post('/:object/create', function(req, res, next) {
    res.send(`POST on object ${req.params.object} requested.`)
})

router.put('/:object/:objID/update', function(req, res, next) {
    res.send(`UPDATE on ${object} ID: ${req.params.objID} requested.`)
})

router.delete('/:object/:objID/delete', function(req, res, next) {
    res.send(`DELETE on ${object} ID: ${req.params.objID} requested.`)
})

// Objects page
router.get('/:objects', function(req, res, next) {
    switch (req.params.objects) {
        case "book": 
            res.send("Books");
            break;
        case "genre":
            res.send("Genres");
            break;
        case "author":
            res.send("Authors");
            break;
        case "bookinstance":
            res.send("Book instances");
            break;
        default:
            res.send("Default");
            break;
    }
})

// Specific book ID page
router.get('/:objects/:objID', function(req, res, next) {
    switch (req.params.objects) {
        case "book": 
            res.send(`The book ID you selected is ${req.params.objID}`);
            break;
        case "genre":
            res.send(`The genre ID you selected is ${req.params.objID}`);
            break;
        case "author":
            res.send(`The Author ID you selected is ${req.params.objID}`);
            break;
        default:
            res.send("Default");
            break;
    }
})

module.exports = router;