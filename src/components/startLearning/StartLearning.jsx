import React from 'react';
import { useLoaderData, NavLink, Link } from 'react-router-dom';
import pinImg from '../../assets/pin.png'

const StartLearning = () => {
    const vocabData = useLoaderData();

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-3xl font-bold text-center text-blue-900 my-8">Let's Start Learning!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {vocabData.slice(0, 10).map((item) => (
                    <NavLink
                        key={item.Id}
                        to={`/lessons/${item.Lesson_no}`}
                        className="bg-teal-600 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <h3 className="text-center">Lesson {item.Lesson_no}</h3>
                    </NavLink>
                ))}
            </div>
            <div className="tutorial-section my-10">
                <div className='text-center mb-20'>
                    <h2 className="text-3xl text-center font-bold text-blue-900 mb-4 transform -rotate-6 inline-block px-4 py-2 rounded-lg shadow-md">
                        Learn the Alphabet
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-8 gap-6">
                    <div className="flex justify-center w-full lg:w-1/2">
                        <iframe className='rounded-lg shadow-lg border border-gray-500 p-2 ' width="560" height="315" src="https://www.youtube.com/embed/dlazjKbt40Q?si=EKUVC5_1wDI-_ORL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    <div className="flex flex-col space-y-3 justify-center items-center text-center w-full lg:w-1/2">
                        <img
                            src={pinImg}
                            alt=""
                            className="w-32 h-20 object-contain"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Let our native speakers guide you through language that’s real, relevant, and authentic
                        </h3>
                    </div>
                </div>
            </div>
            <div className="text-center mb-14 pt-5">
                <Link to="/tutorials"
                    className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600  shadow-md">
                    View More
                </Link>
            </div>
        </div>
    );
};

export default StartLearning;
