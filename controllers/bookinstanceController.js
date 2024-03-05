const BookInstance = require("../models/bookinstance");

// Display a list of all bookInstances
exports.bookInstance_list = async (req, res, next) => {
    try {
        const allBookInstances = await BookInstance.find().populate("book").exec();
        res.render("bookinstance_list", {
            title: "Book Instance List",
            bookInstance_list: allBookInstances,
        });
    } catch (err) {
        next(err)
    }
}

// Display detail page for a specific bookInstance on GET
exports.bookInstance_detail = async (req, res, next) => {
    try {
        let bookInstanceId = req.params.objID;
        await res.send(`Not implemented: bookInstance_detail, req.params.id = ${bookInstanceId}`);
    } catch (err) {
        next(err)
    }
}

// Display bookInstance create form on GET
exports.bookInstance_create_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_create GET form")
    } catch (err) {
        next(err)
    }
}

// Display bookInstance create on POST
exports.bookInstance_create_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_create POST data")
    } catch (error) {
        next(error)
    }
}

// Display bookInstance delete on GET
exports.bookInstance_delete_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_delete GET form");
    } catch (error) {
        next(error)
    }
}

// Display bookInstance delete on POST
exports.bookInstance_delete_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_delete POST data");
    } catch (error) {
        next(error)
    }
}

// Display bookInstance update form on GET
exports.bookInstance_update_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_update GET form");
    } catch (error) {
        next(error)
    }
}

// Display bookInstance update form on POST
exports.bookInstance_update_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: bookInstance_update POST data");
    } catch (error) {
        next(error)
    }
}