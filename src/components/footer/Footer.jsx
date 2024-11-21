import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='mt-16 text-center'>
                <h1 className='text-4xl font-bold text-blue-900 mb-2 '>Lingo Bingo</h1>
                <p className='font-light text-gray-700'>Unlock the world, one word at a time.</p>
            </div>
            <div className="border-t border-gray-200 my-6 w-10/12 mx-auto"></div>
            <footer className=" text-center pb-6">
                <div>
                    <h3><span className='font-semibold'>Contact us:</span> lingo.bingo@school.net</h3></div>
                <div>
                    <span className='font-semibold'>Follow us:</span>
                    <Link to="https://facebook.com" className="ml-2 hover:text-teal-700 underline">Facebook</Link> |
                    <Link to="https://twitter.com" className="ml-2 hover:text-teal-700 underline">Twitter</Link>
                </div>
                <div className='text-sm'>&copy; 2024 LingoBingo. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;