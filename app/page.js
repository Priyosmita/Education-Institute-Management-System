'use client';
import React, { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Window from './components/Window';


const Page = () => {
  const [selectedView, setSelectedView] = useState('Dashboard');

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