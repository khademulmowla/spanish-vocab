
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="text-center py-12 bg-gradient-to-r from-blue-100 via-sky-100 to-teal-100">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 animate__animated animate__zoomIn animate__delay-1s">
                About <span className="text-teal-500">Vocab</span>
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto px-6">
                Vocab is dedicated to making Spanish vocabulary learning accessible, interactive, and enjoyable.
                Our platform is designed to help learners of all levels master essential Spanish words and phrases,
                improving their communication skills and confidence in the language.
            </p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mt-6 px-6">
                With curated lessons, real-life examples, and engaging activities, users can effortlessly expand their vocabulary
                and understand how to use new words in context. Our mission is to simplify learning through an intuitive approach,
                ensuring that everyone can progress at their own pace while enjoying the process.
            </p>
            <div className="text-center my-10 pt-5">
                <Link
                    to="/startlearning"
                    className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600 shadow-md"
                >
                    Let's Learn
                </Link>
            </div>
        </div>
    );
};

export default AboutSection;

