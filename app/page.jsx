"use client"
import Sidebar from './components/Sidebar/sidebar';
import { useState } from 'react';
import MainSection from './components/Main/mainsection';
import Navbar from './components/Nav/navbar';

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <main className="  ">
      <div className=''>
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Sidebar showSideBar={showSideBar}/>
        <MainSection/>
      </div>
    </main>
  )
}
