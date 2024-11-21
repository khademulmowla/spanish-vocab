import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const Tutorials = () => {
    const videos = useLoaderData();
    return (
        <div className="card shadow-lg bg-base-100 w-full max-w-4xl mx-auto p-6">
            <Helmet>
                <title>
                    assignment-9 | Tutorials
                </title>
            </Helmet>
            <h2 className="text-3xl md:text-4xl text-blue-900 font-bold mb-4 text-center">Tutorial Videos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {videos.map((video, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9 bg-gray-100 p-2 rounded-lg shadow-md">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={video.url}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold">{video.title}</h3>
                            <p className="text-sm text-gray-600">Duration: {video.duration}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Link

                    to="/startlearning"
                    className="bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-teal-600  shadow-md"
                >
                    Learn Vocabularies
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;