"use client";
import { useState } from 'react';
import Link from 'next/link';
import logo from "../images/logo.png";
import Image from 'next/image';

const Navbar = ({language,setLanguage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false); 
  const [activeTab, setActiveTab] = useState('studio'); 
  const navTabs = ['studio', 'workshop', 'exams', 'meditation', 'contact', 'faq', 'resources']

  const content = {
    en: {
      logo: 'PLOONET',
      studio: 'Studio',
      workshop: 'Workshop',
      exams: 'Exams',
      meditation: 'Meditation',
      contact: 'Contact Us',
      faq: 'FAQ',
      resources: 'Resources',
      login: 'Login',
    },
    ko: {
      logo: '플루넷',
      studio: '스튜디오',
      workshop: '워크샵',
      exams: '손식',
      meditation: '메디테이션',
      contact: '입시주소',
      faq: '장치사항',
      resources: '자료문의',
      login: '로그인',
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const switchLanguage = (lang) => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <nav className="bg-black flex items-center text-[#999999] h-[100px] max-w-full sticky top-0 z-50">

  <div className="container mx-auto flex justify-between items-center py-4">
    {/* Logo */}
    <div className=" font-bold cursor-pointer px-3 tracking-wide">
      <Image src={logo} alt="logo" />
    </div>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex xl:space-x-8 lg:space-x-4 xl:text-[16px] lg:text-[12px] text-nowrap font-medium relative">
      {navTabs.map((tab) => (
        <li
          key={tab}
          className={`relative hover:text-white ${activeTab === tab ? 'text-white' : ''}`}
          onMouseEnter={() => setActiveTab(tab)}
        >
          {/* <Link href={`/${tab}`}>{content[language][tab]}</Link> */}
          <Link href="#">{content[language][tab]}</Link>
          {activeTab === tab && (
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-2 w-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span>
          )}
        </li>
      ))}
    </ul>

    {/* Right Section: Login and Language Switcher */}
    <div className="hidden lg:flex items-center space-x-6">
      <button className="hover:text-white text-[16px]">{content[language].login}</button>

      {/* Language Switcher */}
      <div
        className="relative"
        onMouseEnter={() => setShowLangMenu(true)}
        onMouseLeave={() => setShowLangMenu(false)}
      >
        <button className="text-2xl">🌐</button>
        {showLangMenu && (
          <div className="absolute right-0 bg-white text-black p-2 rounded shadow-lg">
            <button
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => switchLanguage('en')}
            >
              English
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => switchLanguage('ko')}
            >
              한국어
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Mobile Menu Toggle */}
    <div className={`lg:hidden ${isOpen ? "bg-[#E96C4F] rounded-lg" : "bg-transparent"} relative flex px-3 mx-2`}>
      <button onClick={toggleMenu} className="text-3xl">
        ☰
      </button>
    </div>
    <ul className={`lg:hidden w-full top-28 left-0 absolute ${isOpen ? 'block' : 'hidden'} rounded-xl bg-black p-4`}>
    <div className="flex items-center justify-between w-full">
      <button className="hover:text-white text-nowrap text-[16px]">{content[language].login}</button>

      {/* Language Switcher */}
      <div
        className=" relative"
        onMouseEnter={() => setShowLangMenu(true)}
        onMouseLeave={() => setShowLangMenu(false)}
      >
        <button className="text-2xl">🌐</button>
        {showLangMenu && (
          <div className="absolute right-0 bg-white text-black p-2 rounded shadow-lg">
            <button
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => switchLanguage('en')}
            >
              English
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => switchLanguage('ko')}
            >
              한국어
            </button>
          </div>
        )}
      </div>
    </div>
    {navTabs.map((tab) => (
      <li key={tab} className="hover:text-white">
        {/* <Link href={`/${tab}`}>{content[language][tab]}</Link> */}
        <Link href="#" className='w-full' onClick={()=>setIsOpen(false)}>{content[language][tab]}</Link>
      </li>
    ))}
  </ul>
  </div>
</nav>

  );
};

export default Navbar;

