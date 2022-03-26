import './Book.css'

import React from 'react';



const Book = ({book}) => {
    const {image,title,isbn13,price}=book
   
   
    return (
        <div className='book-container'>
          <img src={image} alt="" />

          <div className='book-info'>
          <p>{title}</p>
          <p>Isbn No: {isbn13}</p>
          <p>Price: {price}</p>
          </div>
          
        </div>
    );
};

export default Book;