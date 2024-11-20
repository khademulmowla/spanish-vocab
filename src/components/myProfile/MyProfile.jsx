import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
            <div className='bg-white shadow-lg rounded-lg p-6 max-w-md w-full'>
                <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome, {user.displayName}</h1>
                <div className="flex justify-center mb-4">
                    <img className="w-32 h-32 rounded-full border-4 border-blue-500" src={user.photoURL} alt="" />
                </div>
                <div className="text-center mb-6">
                    <p className='text-lg font-thin text-gray-800'>Email: {user.email}</p>
                    <p className='text-lg font-thin text-gray-800'>Name: {user.displayName}</p>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/updateprofile" className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-teal-600">Update Profile</Link>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
