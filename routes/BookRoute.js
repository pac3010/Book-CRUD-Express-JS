import express from "express";
import {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    getFilteredBooks
} from "../controllers/BookController.js";

const router = express.Router();

router.get('/books', async(req, res) =>{
    if(Object.keys(req.query).length === 0){
        await getBooks(req, res);
    }else{
        await getFilteredBooks(req, res);
    }
});
router.post('/books', createBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;