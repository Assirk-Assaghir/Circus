import React from 'react';

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            {pageNumbers.map(number => (
                <p className='number' onClick={() => paginate(number)} >
                    {number}
                </p>
            ))}
        </div>
    );
};

export default Pagination;