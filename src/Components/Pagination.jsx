import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumber.push(i);
  }
  return (
    <div>
      <ul>
        {PageNumber.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
