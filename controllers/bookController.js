const Book = require("../models/book");
const Author = require("../models/author")
const Genre = require("../models/genre")
const BookInstance = require("../models/bookinstance")

exports.index = async (req, res, next) => {
    try {
        // Fetch results from database
        const [
            numBooks,
            numBookInstances,
            numAvailableBookInstances,
            numAuthors,
            numGenres,
        ] = await Promise.all([
            Book.countDocuments({}).exec(),
            BookInstance.countDocuments({}).exec(),
            BookInstance.countDocuments({status: "Available"}),
            Author.countDocuments({}).exec(),
            Genre.countDocuments({}).exec(),
        ])

        res.render("index", {
            title: "Local Library Home",
            book_count: numBooks,
            book_instance_count: numBookInstances,
            author_count: numAuthors,
            genre_count: numGenres,
        });

    } catch (error) {
        console.log("Hit the bookController catch exception")
        next(error)
    }
}

// Schema for the book model

// const BookSchema = new Schema({
//     title: { type: String, required: true },
//     author: { type: Schema.Types.ObjectId, ref: "Authur", required: true },
//     summary: { type: String, required: true },
//     isbn: { type: String, required: true },
//     genre: [ { type: Schema.Types.ObjectId, ref: "Genre" }]
// })

// Display a list of all Books
exports.book_list = async (req, res, next) => {
    try {
        const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();
        await res.render("book_list", { title: "Book List", book_list: allBooks });
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