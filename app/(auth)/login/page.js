'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaKey  } from "react-icons/fa";
import Link from 'next/link';
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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

  return (
    <div className='h-screen bg-gray-300 flex items-center justify-center'>
      <div className='rounded-lg border-black border-4 bg-white shadow-2xl p-10'>
        <div className='flex justify-center'>
          <p className='text-gray-800 font-semibold text-2xl pt-2 pb-4'>
            Unique Educational Institution
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="mb-4 text-gray-700 text-xl">Please login to your account</p>

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
            <p className="text-gray-600">Don&apos;t have an account?</p>
            <Link
              href="/signup"
              className="transform transition duration-300 hover:scale-110 hover:text-blue-700  text-gray-600"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;