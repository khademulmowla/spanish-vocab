import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({
                displayName: name,
                photoURL: photoURL,
            });
            navigate('/myprofile');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="container mx-auto p-6 flex justify-center items-center ">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-blue-900 mb-2">Update Your Profile</h1>
                <form onSubmit={handleUpdateProfile} className="space-y-3">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block font-semibold">Photo URL</label>
                        <input
                            id="photoURL"
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <button type="submit" className="mt-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-teal-600">Update Information</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;
