import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const Books = () => {
    const {books} = useLoaderData();
    console.log(books)
    return (
        <div className='my-container grid sm:grid-cols-2 md:grid-cols-4 gap-6 '>
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