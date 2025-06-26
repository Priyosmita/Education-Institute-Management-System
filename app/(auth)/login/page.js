'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaKey  } from "react-icons/fa";
import Link from 'next/link';
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { IoPersonSharp } from "react-icons/io5";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.error("Reset error:", error.message);
      alert("Error sending reset email. Check the email address.");
    }
  };

  return (
    <div className='h-screen bg-gray-300 flex items-center justify-center'>
      <div>
        
      </div>
      <div className='rounded-lg border-black border-4 bg-white shadow-2xl p-10'>
        <div className='flex justify-center'>
          <img 
          src="/logo.png" 
          alt="Unique Education Institution" 
          width="150"
          height="150"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <p className="mb-4 mt-2 text-gray-700 text-xl">Please login to your account</p>

          <label className='text-gray-700'>Email/Mobile Number:</label>
          <div className='flex flex-row pb-4'>
            <div className='bg-blue-900'><IoPersonSharp className='text-2xl text-white mt-2 mr-4 ml-4'/></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Login email/mobile number"
              className=" w-full p-2 bg-gray-200 text-black"
              required
            />
          </div>

          <label className='text-gray-700'>Password:</label>
          <div className="flex flex-row mb-4">
            <div className='bg-blue-900'><FaKey className='text-2xl text-white mt-2 mr-4 ml-4'/></div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 bg-gray-200 text-black"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-gray-700 bg-gray-300"
            >
              {showPassword ? <FaEye className="text-2xl mt-2 mr-4 ml-4" /> : <FaEyeSlash className="text-2xl mt-2 mr-4 ml-4" />}
            </div>
          </div>

          <div className="mb-6 pt-4">
            <button
              type="submit"
              className='px-8 py-1 rounded-lg transform transition duration-300 hover:scale-110 hover:bg-red-700 bg-red-500 text-white'
            >
              Login
            </button>
          </div>

          <div className="flex items-center justify-between pb-4">
            <p className="text-sm text-gray-600">Don&apos;t have an account?</p>
            <Link
              href="/signup"
              className="text-sm hover:underline hover:text-blue-700 text-gray-600"
            >
              Register
            </Link>
          </div>

          <div className="text-right pt-2">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm hover:text-blue-700 text-gray-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;