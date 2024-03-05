const Author = require("../models/author");

// Display a list of all Authors
exports.author_list = async (req, res, next) => {
    try {
        const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
        res.render("author_list", {
            title: "Author List",
            author_list: allAuthors
        })
    } catch (err) {
        next(err)
    }
}

// Display detail page for a specific Author on GET
exports.author_detail = async (req, res, next) => {
    try {
        let authorId = req.params.objID;
        await res.send(`Not implemented: author_detail, req.params = ${req.params.objID}`);
    } catch (err) {
        next(err)
    }
}

// Display Author create form on GET
exports.author_create_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_create GET form")
    } catch (err) {
        next(err)
    }
}

// Display Author create on POST
exports.author_create_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_create POST data")
    } catch (error) {
        next(error)
    }
}

// Display Author delete on GET
exports.author_delete_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_delete GET form");
    } catch (error) {
        next(error)
    }
}

// Display Author delete on POST
exports.author_delete_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_delete POST data");
    } catch (error) {
        next(error)
    }
}

// Display Author update form on GET
exports.author_update_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_update GET form");
    } catch (error) {
        next(error)
    }
}

// Display Author update form on POST
exports.author_update_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: author_update POST data");
    } catch (error) {
        next(error)
    }
}