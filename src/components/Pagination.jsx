import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({ currentPage, totalPages, changePage }){

    const handleChangePage = (number) => {
        changePage(number);
    }

    return (
        <div className='pagination'>
            <button onClick={ () => handleChangePage(currentPage-1)}
            disabled={currentPage === 1}>
                Previous
            </button>
            { Array.from({length: totalPages}, (_, index) => (
                <button key={index} onClick={() => handleChangePage(index+1)}
                disabled={currentPage === index+1}>
                    {index+1}
                </button>
            ))}
            <button onClick={ () => handleChangePage(currentPage+1)}
            disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}