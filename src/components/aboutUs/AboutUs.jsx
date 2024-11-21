import React from 'react';
import { Helmet } from 'react-helmet-async';
import ceoImg from '../../assets/ceo2.jpeg';
import contentImg from '../../assets//fcon.png';
import lanImg from '../../assets/lanTea.png';
import devImg from '../../assets/dev5.png'

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>
                    assignment-9 | About Us
                </title>
            </Helmet>
            <div className="min-h-screen bg-base-200 rounded-b-lg py-8 px-4 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
                            About Us
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Learn more about who we are and our mission to help you succeed.
                        </p>
                    </header>
                    <section className="mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-800 font-thin ">
                                    At Lingo Bingo, our mission is to empower individuals worldwide by helping them master the Spanish language, unlocking opportunities for cultural understanding, personal growth, and global connections. Through innovative tools, engaging content, and expert guidance, we aim to make learning Spanish an enjoyable and rewarding experience for learners of all levels.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-gray-800 font-thin">
                                    Our vision is to become the leading platform for Spanish language education, fostering a community of passionate learners and bridging cultures. We aspire to inspire millions to embrace the beauty of the Spanish language and its diverse heritage, creating a world united by communication and mutual respect
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={ceoImg}
                                    alt="Team Member"
                                    className="w-32 h-32 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-blue-900">
                                    John Doe
                                </h3>
                                <p className="text-gray-600">Founder & CEO</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={lanImg}
                                    alt="Team Member"
                                    className="w-32 h-32 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-blue-900">
                                    Jane Smith
                                </h3>
                                <p className="text-gray-600">Language Expert</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={contentImg}
                                    alt="Team Member"
                                    className="w-32 h-32 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-blue-900">
                                    Emily Johnson
                                </h3>
                                <p className="text-gray-600">Content Strategist</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={devImg}
                                    alt="Team Member"
                                    className="w-32 h-32 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-blue-900">
                                    Michael Brown
                                </h3>
                                <p className="text-gray-600">Developer</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;