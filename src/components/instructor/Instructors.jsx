import React from 'react';
import { useLoaderData } from "react-router-dom";

const Instructors = () => {
    const instructors = useLoaderData();

    return (
        <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">Featured Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
                {instructors.map(instructor => (
                    <div
                        key={instructor.id}
                        className="p-6 bg-white shadow-lg rounded-xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
                    >
                        <img
                            src={instructor.img}
                            alt={instructor.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200"
                        />
                        <h3 className="text-xl font-bold text-blue-900">{instructor.name}</h3>
                        <p className="text-sm font-semibold text-blue-900">{instructor.title}</p>
                        <p className="mt-3 text-gray-600 text-sm">{instructor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;
