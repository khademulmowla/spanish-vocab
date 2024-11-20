
import React, { useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ForgotPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const initialEmail = location.state?.email || "";

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please provide a valid email address.");
            return;
        }
        passwordReset(email)
            .then(() => {
                alert(
                    "Password reset email sent. Please check your inbox or spam folder."
                );
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error resetting password:", error.message);
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
                <h2 className="font-semibold text-3xl text-center pt-8">
                    Reset Password
                </h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            defaultValue={initialEmail}
                            ref={emailRef}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            onClick={handleResetPassword}
                            className="btn btn-neutral"
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
