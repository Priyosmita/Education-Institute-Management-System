'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import Link from 'next/link';
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Image from 'next/image';
import { IoPersonSharp } from "react-icons/io5";

const Page = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
            });

            alert("Account created successfully!");
            router.push("/login");
        } catch (error) {
            console.error("Signup error:", error.message);
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className='h-screen bg-gray-300 flex items-center justify-center'>
            <div className='flex flex-row gap-x-4'>
                <Image
                    src="/auth_page.jpeg"
                    alt="auth page image"
                    width="900"
                    height="600"
                    className='rounded-lg shadow-2xl'
                />
                <div className='rounded-lg border-black border-4 bg-white shadow-2xl p-10'>
                    <div className='flex justify-center'>
                        <Image
                            src="/logo.png"
                            alt="Unique Education Institution"
                            width="150"
                            height="150"
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <p className="mb-4 mt-2 text-gray-700 text-xl">Please create an account</p>

                        <label className='text-gray-700'>Email:</label>
                        <div className='flex flex-row pb-4'>
                            <div className='bg-blue-900'><IoPersonSharp className='text-2xl text-white mt-2 mr-4 ml-4' /></div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter your email"
                                className="w-full p-2 bg-gray-200 text-black"
                                required
                            />
                        </div>


                        <label className='text-gray-700'>Password:</label>
                        <div className="flex flex-row mb-4">
                            <div className='bg-blue-900'><FaKey className='text-2xl text-white mt-2 mr-4 ml-4' /></div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Please enter your password"
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

                        <label className='text-gray-700'>Confirm Password:</label>
                        <div className="flex flex-row mb-4">
                            <div className='bg-blue-900'><FaKey className='text-2xl text-white mt-2 mr-4 ml-4' /></div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Re-enter your password"
                                className={`w-full p-2 pr-10 bg-gray-200 text-black ${confirmPassword && password !== confirmPassword
                                    ? "border-4 border-red-600"
                                    : ""
                                    }`}
                                required
                            />
                            <div
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="cursor-pointer text-gray-700 bg-gray-300"
                            >
                                {showConfirmPassword ? <FaEye className="text-2xl mt-2 mr-4 ml-4" /> : <FaEyeSlash className="text-2xl mt-2 mr-4 ml-4" />}
                            </div>
                        </div>

                        <div className="mb-6 pt-4">
                            <button
                                type="submit"
                                className='px-6 py-1 rounded-lg transform transition duration-300 hover:scale-110 hover:bg-red-700 bg-red-500 text-white'
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="flex items-center justify-between pb-4">
                            <p className="text-sm text-gray-600">Already have an account?</p>
                            <Link
                                href="/login"
                                className="text-sm hover:underline hover:text-blue-700 text-gray-600"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page