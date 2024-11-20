import React from 'react';
import CountUp from 'react-countup';


const Success = () => {
    return (
        <div className="bg-teal-50 py-16">
            <h2 className="text-center text-blue-900 text-4xl font-bold mb-8">Our Success So Far</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-10">
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <h3 className="text-xl font-semibold text-teal-600">Users</h3>
                    <p className="text-3xl text-teal-500">
                        <CountUp start={0} end={5000} duration={3} />
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <h3 className="text-xl font-semibold text-teal-600">Lessons</h3>
                    <p className="text-3xl text-teal-500">
                        <CountUp start={0} end={10} duration={4} />
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <h3 className="text-xl font-semibold text-teal-600">Vocabulary</h3>
                    <p className="text-3xl text-teal-500">
                        <CountUp start={0} end={200} duration={4} />
                    </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <h3 className="text-xl font-semibold text-teal-600">Tutorials</h3>
                    <p className="text-3xl text-teal-500">
                        <CountUp start={0} end={8} duration={4} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Success;