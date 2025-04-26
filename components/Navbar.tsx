'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-800">江南之美</span>
            </Link>
          </div>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              首页
            </Link>
            <Link href="/culture" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              江南文化
            </Link>
            <Link href="/attractions" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              景点介绍
            </Link>
            <Link href="/food" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              美食特产
            </Link>
            <Link href="/travel-guide" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              旅游攻略
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            首页
          </Link>
          <Link href="/culture" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            江南文化
          </Link>
          <Link href="/attractions" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            景点介绍
          </Link>
          <Link href="/food" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            美食特产
          </Link>
          <Link href="/travel-guide" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
            旅游攻略
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;