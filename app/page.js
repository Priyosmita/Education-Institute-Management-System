'use client';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Window from './components/Window';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const Page = () => {
  const [selectedView, setSelectedView] = useState('Dashboard');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');  // always redirect to login page if not authenticated
      } else {
        setLoading(false); // authenticated user, allow access
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="text-center pt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <div className="flex flex-row">
        <div className="p-6">
          <Navbar setSelectedView={setSelectedView} />
        </div>
        <div className="pt-6 pr-6 pb-6 flex-1">
          <Window selectedView={selectedView} />
        </div>
      </div>
    </div>
  );
};

export default Page;