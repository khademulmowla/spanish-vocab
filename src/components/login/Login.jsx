import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false);
    const { loginUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setErrorMessage('')
        setSuccess(false)
        loginUser(email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log('Error', error.message)
                setErrorMessage(error.message)
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
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        navigate("/forgotpassword", { state: { email } });
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h2 className="font-semibold text-3xl text-center pt-8">Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" ref={emailRef} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                {
                    errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-600">Successfully login</p>
                }

                <p className="font-semibold text-center">New to this website ? <Link className='underline' to='/register'> Register </Link> </p>
                <p className='p-4 text-center'>
                    <Link onClick={handleSignInGoogle} className="hover:text-teal-700 underline">Sign with Google</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;