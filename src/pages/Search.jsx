import React, { useState } from 'react'
import Pagination from '../components/Pagination';
import RecipeTiles from '../components/RecipeTiles';
import data from '../data/recipes.json'
import '../styles/Search.css';


export default function Search(){
    const recipe = data.recipes;
    console.log(recipe);

    const [currentPage, setCurrentPage] = useState(1)
    //temporary 1
    const tilesOnPage = 1;
    const totalPages  = Math.ceil(data.recipes.length / tilesOnPage);

    const handleChangePage = (number) => {
        setCurrentPage(number);
    };

    if(!recipe) {
        // here redirect to not_found
        return <div> Recipe not found </div>
    }

    return (
        <div className="search-main">
            <h2>
                Search
            </h2>
            <RecipeTiles getRecipe={recipe} tilesOnPage={tilesOnPage} currentPage={currentPage}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} changePage={handleChangePage}/>
        </div>  
    );
}