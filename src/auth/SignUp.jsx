import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { auth } from "../utils/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { AuthContext } from "../authContext/authContext";

export default function SignUp() {

 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('Account Created')
        } catch (err) {
            console.log(err)
        }
        navigate("/")
    }

    return (


        <>
            <div className="flex h-screen bg-gray-100">

                {/* Left Side (Image Section) */}
                <div
                    className="w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${assets.signup})` }}
                >
                    <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our Food Hub</h1>
                            <p className="text-gray-300 text-lg">
                                Join us and explore amazing opportunities with ease and comfort.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side (Signup Form) */}
                <div className="w-1/2 flex items-center justify-center bg-white p-8">
                    <div className="max-w-md w-full">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>

                        {/* Signup Form */}
                        <form action="#" method="POST" onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-600 text-sm font-semibold mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                 
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-600 text-sm font-semibold mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-600 text-sm font-semibold mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-400 transition-all text-black hover:text-white p-3 rounded-lg font-semibold hover:bg-orange-500  duration-300"
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* Login Link */}
                        <p className="mt-4 text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to={"/auth/login"} className="text-blue-500 hover:underline">
                                Log in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}