import React from 'react';
import profImg from '../../assets/prof.jpg'

const VocabSchool = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-gray-50 px-8 py-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Vocabulary School</h2>
                <p className="text-lg font-light text-gray-600 mb-8">
                    Work with us. Learn with us. Improve with us.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Learning Spanish vocabulary opens the door to understanding the rich culture and history of Spanish-speaking countries. With over 460 million native speakers, mastering key Spanish words and phrases allows you to connect with people, enjoy literature, and experience the world from a different perspective. Start by learning basic words related to everyday activities, and gradually expand your vocabulary to improve fluency and comprehension.
                </p>

                {/* Progress Bars */}
                <div className="space-y-4">
                    {/* French */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-teal-600">FRENCH</span>
                            <span className="text-sm font-medium text-gray-600">80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-teal-500 h-2.5 rounded-full"
                                style={{ width: "80%" }}
                            ></div>
                        </div>
                    </div>
                    {/* English */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-600">SPANISH</span>
                            <span className="text-sm font-medium text-gray-600">86%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-blue-500 h-2.5 rounded-full"
                                style={{ width: "86%" }}
                            ></div>
                        </div>
                    </div>
                    {/* German */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-purple-600">GERMAN</span>
                            <span className="text-sm font-medium text-gray-600">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-purple-500 h-2.5 rounded-full"
                                style={{ width: "78%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                <img
                    src={profImg} // Replace with your image URL
                    alt=""
                    className="w-80 h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default VocabSchool;