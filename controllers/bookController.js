const Book = require("../models/book");

exports.index = async (req, res, next) => {
    try {
        await res.send("NOT IMPLEMENTED: Site Home Page");
    } catch (error) {
        next(error)
    }
}

// Display a list of all Books
exports.book_list = async (req, res, next) => {
    try {
        await res.send("Not implemented: print out a list of existing books");
    } catch (err) {
        next(err)
    }
}

// Display detail page for a specific Book on GET
exports.book_detail = async (req, res, next) => {
    try {
        let bookId = req.params.objID;
        await res.send(`Not implemented: book_detail, req.params.id = ${bookId}`);
    } catch (err) {
        next(err)
    }
}

// Display Book create form on GET
exports.book_create_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_create GET form")
    } catch (err) {
        next(err)
    }
}

// Display Book create on POST
exports.book_create_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_create POST data")
    } catch (error) {
        next(error)
    }
}

// Display Book delete on GET
exports.book_delete_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_delete GET form");
    } catch (error) {
        next(error)
    }
}

// Display Book delete on POST
exports.book_delete_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_delete POST data");
    } catch (error) {
        next(error)
    }
}

// Display Book update form on GET
exports.book_update_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_update GET form");
    } catch (error) {
        next(error)
    }
}

// Display Book update form on POST
exports.book_update_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: book_update POST data");
    } catch (error) {
        next(error)
    }
}