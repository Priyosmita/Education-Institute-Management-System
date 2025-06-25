'use client'
import React from 'react';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Link from 'next/link';

const page = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state
  const router = useRouter();

  // firebase 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("Login successful");
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className='h-screen bg-gray-300 flex items-center justify-center'>
        <div className='rounded-lg bg-white shadow-2xl w-3xl'>
          <div className='flex justify-center'><p className='text-gray-800 font-semibold text-2xl pt-12 pb-4'>Education Institute Management System</p></div>

          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-gray-700 pl-10 text-xl">Please login to your account</p>

            <label className='text-gray-700 pl-10'>Email:</label>
            <div className='pr-10 pl-10'>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter your email"
                className="mb-4 w-full p-2 bg-gray-200 text-black rounded-md"
                required
              />
            </div>


            <label className='text-gray-700 pl-10'>Password:</label>
            <div className="relative mb-4">
              <div className='pr-20 pl-10'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Please enter your password"
                  className="w-full p-2 bg-gray-200 text-black rounded-md"
                  required
                />
              </div>

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 pr-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-700"
              >
                {showPassword ? (
                  <FaEye className="text-3xl" />
                ) : (
                  <FaEyeSlash className="text-3xl" />
                )}
              </span>
            </div>

            <div className="mb-12 text-center">
              <button type="submit" className='pl-6 pr-6 pt-2 pb-2 rounded-3xl transform transition duration-300 hover:scale-110 hover:bg-blue-700 bg-blue-300 text-black hover:text-white'>
                Login
              </button>
            </div>

            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2 pl-10 text-gray-600">Don&apos;t have an account?</p>
              <button className='transform transition duration-300 hover:scale-110'>
                <Link
                  href="/signup"
                  className="pl-6 pr-6 pt-2 pb-2 mr-10 rounded-3xl transform transition duration-300 hover:bg-blue-700 bg-blue-300 text-black hover:text-white"
                >
                  Register
                </Link>
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default page