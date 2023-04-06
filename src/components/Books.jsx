import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const {books} = useLoaderData();
    
    return (
        <div className='my-container grid md:grid-cols-2 lg:grid-cols-4 gap-6 '>
            {
                books.map(book=><SingleBook
                key={book.isbn13}
                book={book}
                ></SingleBook>)
            }
        </div>
    );
};

export default Books;