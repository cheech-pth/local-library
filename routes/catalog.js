const express = require("express")
let router = express.Router()

// Require controller modules
const author_controller = require("../controllers/authorController")
const book_controller = require("../controllers/bookController")
const bookInstance_controller = require("../controllers/bookinstanceController")
const genre_controller = require("../controllers/genreController")

// Catalog index page...
router.get("/", book_controller.index)

// Get CREATE form for the Object
router.get('/:objects/create', function(req, res, next) {
    switch (req.params.objects) {
        case "book": 
            book_controller.book_create_get(req, res, next);
            break;
        case "genre":
            genre_controller.genre_create_get(req, res, next);
            break;
        case "author":
            author_controller.author_create_get(req, res, next);
            break;
        default:
            res.send("Default switch case caught, return 404 page here..");
            break;
    }
})

// Post request for creating a new object (ie: usr wants to create a new author, book, genre.)
router.post('/:object/create', function(req, res, next) {
    switch (req.params.object) {
        case "author":
            author_controller.author_create_post(req, res, next)
            break;
        case "genre":
            genre_controller.genre_create_post(req, res, next)
            break;
        case "bookinstance":
            bookInstance_controller.bookInstance_create_post(req, res, next)
            break;
        case "book":
            book_controller.book_create_post(req, res, next);
            break;
        default:
            res.send(`${req.params.object} was not found...`)
    }
})

// Put request for updating an existing object
router.put('/:object/:objID/update', function(req, res, next) {
    res.send(`UPDATE on ${object} ID: ${req.params.objID} requested.`)
})

// Delete an existing obj
router.delete('/:object/:objID/delete', function(req, res, next) {
    res.send(`DELETE on ${object} ID: ${req.params.objID} requested.`)
})

// Objects route
router.get('/:objects', function(req, res, next) {
    switch (req.params.objects) {
        case "book": 
            book_controller.index(req, res, next);
            break;
        case "books":
            book_controller.book_list(req, res, next);
            break;
        case "genre":
            genre_controller.genre_list(req, res, next);
            break;
        case "author":
            author_controller.author_list(req, res, next);
            break;
        case "bookinstance":
            bookInstance_controller.bookInstance_list(req, res, next)
            break;
        default:
            res.send("Default");
            break;
    }
})

// Specific obj ID page
router.get('/:objects/:objID', function(req, res, next) {
    switch (req.params.objects) {
        case "book": 
            book_controller.book_detail(req, res, next);
            break;
        case "genre":
            genre_controller.genre_detail(req, res, next);
            break;
        case "author":
            author_controller.author_detail(req, res, next);
            break;
        default:
            res.send("Default switch case caught, return 404 page here..");
            break;
    }
})

module.exports = router;