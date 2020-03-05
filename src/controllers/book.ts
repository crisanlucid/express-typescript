import { Request, Response } from 'express';
import Book from './../models/book';

//GET - api/books  - return all books
export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(books);
        }
    })
}
//GET - api/books/:id  - get book based on ID
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}
//POST - api/books #create a new book
export let addBook = (req: Request, res: Response) => {
    const book = new Book(req.body);
    book.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}


//DELETE - api/books/:id
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send('Successfully deleted the Book!!')
        }
    })
}

//PUT - api/books  #update book base on ID
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully updated book!");
        }
    })
}