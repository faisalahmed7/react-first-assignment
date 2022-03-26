import './Books.css'

import React, { useEffect, useState } from 'react';





const Books = () => {
    const [books, setBooks] = useState([])
   
    

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    

   

    

    return (
        <div className='shop-container'>
            <div className='books-container'>
                {
                    books.map(book => console.log(book))
                }
            </div>

            <div className="cart-container">
                
            </div>

        </div>
    );
};

export default Books;