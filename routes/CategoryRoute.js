import express from "express";
import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getBooksByCategory,
    getFilteredBooksByCategory

} from "../controllers/CategoryController.js"

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.patch('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.get('/categories/:id/books', async (req, res) =>{
    if (Object.keys(req.query).length === 0) {
        await getBooksByCategory(req, res);
    } else {
        await getFilteredBooksByCategory(req, res);
    }
});
export default router;