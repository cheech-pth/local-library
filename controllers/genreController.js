const genre = require("../models/genre");

// Display a list of all Genres
exports.genre_list = async (req, res, next) => {
    try {
        const allGenres = await genre.find().sort({ name: 1 }).exec()
        res.render("genre_list", {
            title: "Genres List",
            genre_list: allGenres
        })
    } catch (err) {
        next(err)
    }
}

// Display detail page for a specific genre on GET
exports.genre_detail = async (req, res, next) => {
    try {
        let genreID = req.params.objID;
        await res.send(`Not implemented: bookInstance_detail, req.params.id = ${genreID}`);
    } catch (err) {
        next(err)
    }
}

// Display bookInstance create form on GET
exports.genre_create_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_create GET form")
    } catch (err) {
        next(err)
    }
}

// Display genre create on POST
exports.genre_create_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_create POST data")
    } catch (error) {
        next(error)
    }
}

// Display genre delete on GET
exports.genre_delete_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_delete GET form");
    } catch (error) {
        next(error)
    }
}

// Display genre delete on POST
exports.genre_delete_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_delete POST data");
    } catch (error) {
        next(error)
    }
}

// Display genre update form on GET
exports.genre_update_get = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_update GET form");
    } catch (error) {
        next(error)
    }
}

// Display genre update form on POST
exports.genre_update_post = async (req, res, next) => {
    try {
        await res.send("Not implemented: genre_update POST data");
    } catch (error) {
        next(error)
    }
}