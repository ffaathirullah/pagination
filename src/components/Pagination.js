import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate, currentPage, nextPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
    <nav style={{width:40}}>
        <ul className="pagination">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a onClick={()=> paginate(number)} href={currentPage || currentPage+1  ? "!#" : ""} className="page-link">
                        {number}
                    </a>
                </li>
            ))}
             {currentPage < pageNumbers[pageNumbers.length -1] ? <li className="page-item" onClick={() => nextPage(currentPage)} href="!#"><a href="!#" className="page-link">NEXT</a></li> : ""}
        </ul>
    </nav>
    )
}
