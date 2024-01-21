import Book from "../models/BookModel.js";
import { filterBooks } from "../services/BookService.js";

export const getBooks = async(req, res) =>{
    try {
        const response = await Book.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        
    }
}

export const getFilteredBooks = async(req, res) =>{
    try {
        const{
            title,
            minYear,
            maxYear,
            minPage,
            maxPage,
            sortByTitle
        } = req.query;

        const response = await filterBooks({
            title,
            minYear,
            maxYear,
            minPage,
            maxPage,
            sortByTitle
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBook = async(req, res) =>{
    try {
        const {
            release_year,
            total_page
        } = req.body;
        if(release_year<1980 || release_year>2021){
            return res.status(400).json({msg:"Release year must be between 1980 and 2021"})
        }
        const thickness = total_page<=100 ? 'tipis' : (total_page<=200 ? 'sedang' : 'tebal');
        req.body.thickness = thickness;
        await Book.create(req.body);
        res.status(201).json({msg:"Book Created"});
    } catch (error) {
        console.log(error.message);
        
    }
}

export const updateBook = async(req, res) =>{
    try {
        const {
            release_year,
            total_page
        } = req.body;
        if(release_year<1980 || release_year>2021){
            return res.status(400).json({msg:"Release year must be between 1980 and 2021"})
        }
        const thickness = total_page<=100 ? 'tipis' : (total_page<=200 ? 'sedang' : 'tebal');
        req.body.thickness = thickness;
        await Book.update(req.body, {
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Book Updated"});
    } catch (error) {
        console.log(error.message);
        
    }
}

export const deleteBook = async(req, res) =>{
    try {
        await Book.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Book Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}