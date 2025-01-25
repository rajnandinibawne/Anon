import React from 'react';
import style from './Pagignation.module.css';

const Pagignation = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i);
  }

  return (
      <div className={style.men_pagignation}>
          {pages.map((page, index) => {
              return (
                  <button
                      key={index}
                      onClick={() => setCurrentPage(page)}
                      className={page == currentPage ? "active" : ""}>
                      {page}
                  </button>
              );
          })}
      </div>
  );
};

export default Pagignation;
