import Book from "../models/BookModel.js";

export const filterBooks = async({
    title,
    minYear,
    maxYear,
    minPage,
    maxPage,
    sortByTitle
}) => {
    try {
        const books = await Book.findAll();

        const filteredBooks = books
            .filter(book =>{
                const titleMatch = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;
                const yearMatch = (!minYear || book.release_year >= parseInt(minYear)) &&
                                (!maxYear || book.release_year <= parseInt(maxYear));
                const pageMatch = (!minPage || book.total_page >= parseInt(minPage)) && 
                                (!maxPage || book.total_pahe <= parseInt(maxPage));
                
                return titleMatch && yearMatch && pageMatch;
        })
            .sort((a,b) => {
                if(sortByTitle){
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    return sortByTitle === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
                }

            return a.id - b.id;
        });

        return filteredBooks;

    } catch (error) {
        console.log(error.message)
        
    }
}