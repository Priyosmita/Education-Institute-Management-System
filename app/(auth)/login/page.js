'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { IoPersonSharp } from "react-icons/io5";
import Image from 'next/image';

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
    <div className='min-h-screen bg-gray-300 flex items-center justify-center px-4 py-10'>
      

      <div className='flex flex-col lg:flex-row gap-4 w-full max-w-6xl items-stretch'>

  {/* left image */}
  <div className='w-full lg:w-3/5'>
    <div className="h-full w-full rounded-lg shadow-2xl overflow-hidden">
      <Image
        src="/auth_page.jpeg"
        alt="auth page image"
        width={1200}
        height={900}
        className='w-full h-full object-cover'
      />
    </div>
  </div>

  {/* right login box */}
  <div className='w-full lg:w-2/5 rounded-lg border-black border-4 bg-white shadow-2xl p-6 sm:p-10 flex flex-col justify-center'>
    <div className='flex justify-center'>
      <Image
        src="/logo.png"
        alt="Unique Education Institution"
        width={150}
        height={150}
        className='object-contain'
      />
    </div>

    <form onSubmit={handleSubmit}>
      <p className="mb-4 mt-6 text-gray-700 text-xl sm:text-2xl text-center">
        Please login to your account
      </p>

      <label className='text-gray-700 text-md sm:text-lg'>Email:</label>
      <div className='flex flex-row pb-4'>
        <div className='bg-blue-900 p-2 flex items-center'>
          <IoPersonSharp className='text-xl sm:text-2xl text-white' />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Login email id"
          className="w-full p-2 bg-gray-200 text-black text-sm sm:text-base"
          required
        />
      </div>

      <label className='text-gray-700 text-md sm:text-lg'>Password:</label>
      <div className="flex flex-row mb-4">
        <div className='bg-blue-900 p-2 flex items-center'>
          <FaKey className='text-xl sm:text-2xl text-white' />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 bg-gray-200 text-black text-sm sm:text-base"
          required
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer text-gray-700 bg-gray-300 p-2 flex items-center"
        >
          {showPassword ? (
            <FaEye className="text-xl sm:text-2xl" />
          ) : (
            <FaEyeSlash className="text-xl sm:text-2xl" />
          )}
        </div>
      </div>

      <div className="mb-6 pt-4 text-center">
        <button
          type="submit"
          className='px-6 py-2 rounded-lg text-sm sm:text-base transform transition duration-300 hover:scale-110 hover:bg-red-700 bg-red-500 text-white'
        >
          Login
        </button>
      </div>

      <div className="text-right pt-2">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm sm:text-base hover:text-blue-700 text-gray-600 hover:underline"
        >
          Forgot Password? / Reset Password
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default Page;