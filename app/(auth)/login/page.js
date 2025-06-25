'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      <div className='rounded-lg bg-white shadow-2xl p-10'>
        <div className='flex justify-center'>
          <p className='text-gray-800 font-semibold text-2xl pt-2 pb-4'>
            Education Institute Management System
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="mb-4 text-gray-700 text-xl">Please login to your account</p>

          <label className='text-gray-700'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email"
            className="mb-4 w-full p-2 bg-gray-200 text-black rounded-md"
            required
          />

          <label className='text-gray-700'>Password:</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your password"
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-700"
            >
              {showPassword ? <FaEye className="text-2xl" /> : <FaEyeSlash className="text-2xl" />}
            </span>
          </div>

          <div className="mb-6 text-center">
            <button
              type="submit"
              className='px-6 py-2 rounded-3xl transform transition duration-300 hover:scale-110 hover:bg-blue-700 bg-blue-300 text-black hover:text-white'
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