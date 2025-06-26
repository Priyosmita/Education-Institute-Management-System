'use client';
import React, { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [photoURL, setPhotoURL] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setPhotoURL(user.photoURL);
      } else {
        setPhotoURL(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      router.push('/login'); // redirect to login page
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div className='bg-white w-full h-20 flex justify-between items-center px-10 shadow-md'>
      <div className='text-gray-800 text-2xl font-bold'>
        Unique Educational Institute
      </div>

      <div className="relative group">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
          src="/logo.png" // tuition centre logo
              alt="user"
              width="60"
              height="60"
          />
        </div>

        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;