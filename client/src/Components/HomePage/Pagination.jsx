import React from 'react';

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <p onClick={() => paginate(number)} >
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;