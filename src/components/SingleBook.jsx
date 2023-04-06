import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

const SingleBook = ({ book }) => {
    const { isbn13, image, title, subtitle, price } = book;
    return (
        <Link to={`/book/${isbn13}`}>
            <div className='w-full shadow-md rounded-md relative transition duration-200 hover:shadow-xl hover:-translate-y-2'>
                <img src={image} alt="book image" className='object-cover w-full' />
                <div className='bg-black bg-opacity-70 text-gray-300 p-5 absolute inset-0 rounded-md flex flex-col opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer'>
                    <h2 className='text-xl font-bold text-white mb-10'>{title}</h2>
                    <p>{subtitle && subtitle.substring(0, 50)}...</p>
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>

    );
};

export default SingleBook;