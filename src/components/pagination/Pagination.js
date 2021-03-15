import React from 'react'
import './Pagination.scss'

const Pagination = ({ postsPerPage, totalPosts, paginate, activePostPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul className="pagination__list">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination__item">
                        <a href="!#" onClick={() => paginate(number)} className={` ${activePostPage === number ? 'active' : ''} pagination__link`} >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Pagination
