import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const { createUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);
        setSuccess(false)
        setErrorMessage('');
        if (password.length < 6) {
            setErrorMessage('password should be atleast 6 character or longer')
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Please provide at least one uppercase and one lowercase');
            return;
        }
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setSuccess(true)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.log('Error', error.message)
                setErrorMessage(error.message);
                setSuccess(false)
            })
    }
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log('Error', error.message)
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center text-blue-900">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h2 className="text-3xl font-bold text-center pt-2">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-900">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-900">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-900">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-900">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-2">
                        <button className="bg-blue-900 text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-teal-600 shadow-md">Register</button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-red-600 text-center px-3 py-1">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600 text-center">Successfully login</p>
                }

                <p className="font-semibold text-center">Already Have An Account ? <Link className='underline' to='/login'> Login </Link> </p>
                <p className='p-2 text-center'>
                    <Link onClick={handleSignInGoogle} className="hover:text-teal-700 underline">Sign with Google</Link>
                </p>
            </div>


        </div>
    );
};

export default Register;