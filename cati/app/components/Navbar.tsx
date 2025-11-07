'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavbarProps {
  currentPage?: 'home' | 'despre' | 'servicii' | 'contact' | 'lucrari';
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (page: string) => {
    return currentPage === page ? 'font-semibold border-b-2 border-white' : '';
  };

  const isActiveMobile = (page: string) => {
    return currentPage === page ? 'bg-[#7A1E39] text-white' : 'text-[#7A1E39]';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 shadow-lg z-50" style={{ backgroundColor: '#7A1E39' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-cati.png"
                  alt="Cabinet Stomatologic Dr. Catalina-Ionela Iancu"
                  width={50}
                  height={50}
                  className="object-contain md:w-[60px] md:h-[60px]"
                  priority
                />
                <div className="ml-3 md:ml-4">
                <h1 className="text-lg md:text-xl font-bold text-white font-heading">
                  Dr. Catalina-Ionela Iancu
                </h1>
                <p className="text-xs md:text-sm text-white opacity-90">
                  Medic Stomatologie Generala
                </p>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:opacity-75 transition-opacity">Acasă</Link>
              <Link href="/despre" className="text-white hover:opacity-75 transition-opacity">Despre</Link>
              <Link href="/servicii" className="text-white hover:opacity-75 transition-opacity">Servicii</Link>
              <Link href="/lucrari" className="text-white hover:opacity-75 transition-opacity">Lucrări</Link>
              <Link href="/contact" className="text-white hover:opacity-75 transition-opacity">Contact</Link>
            </div>
            <div className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white mt-1"></span>
                <span className="block w-6 h-0.5 bg-white mt-1"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-lg z-50" style={{ backgroundColor: '#7A1E39' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <Image
                  src="/logo-cati.png"
                  alt="Cabinet Stomatologic Dr. Catalina-Ionela Iancu"
                  width={50}
                  height={50}
                  className="object-contain pt-10 md:pt-0 md:w-[60px] md:h-[60px]"
                  priority
                />
                <div className="ml-3 md:ml-4 pt-7 md:pt-0">
                <h1 className="text-lg md:text-xl font-bold text-white font-heading">
                  Dr. Catalina-Ionela Iancu
                </h1>
                <p className="text-xs md:text-sm text-white opacity-90">
                  Medic Dentist Stomatologie Generala
                </p>
                </div>
              </Link>
            </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-white hover:opacity-75 transition-opacity ${isActive('home')}`}
            >
              Acasă
            </Link>
            <Link 
              href="/despre" 
              className={`text-white hover:opacity-75 transition-opacity ${isActive('despre')}`}
            >
              Despre
            </Link>
            <Link 
              href="/servicii" 
              className={`text-white hover:opacity-75 transition-opacity ${isActive('servicii')}`}
            >
              Servicii
            </Link>
            <Link 
              href="/lucrari" 
              className={`text-white hover:opacity-75 transition-opacity ${isActive('lucrari')}`}
            >
              Lucrări
            </Link>
            <Link 
              href="/contact" 
              className={`text-white hover:opacity-75 transition-opacity ${isActive('contact')}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pt-4 md:pt-0">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-white hover:opacity-75 focus:outline-none focus:opacity-75 transition-opacity"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Smooth Animation */}
        {isMounted && (
          <div className={`md:hidden pb-6 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 pt-2 pb-4 space-y-0 bg-white bg-opacity-5 rounded-lg mt-2">
            <Link 
              href="/" 
              className={`block px-3 py-4 hover:opacity-75 transition-opacity rounded-lg hover:bg-white hover:bg-opacity-10 border-b border-[#7A1E39] border-opacity-30 ${isActiveMobile('home')}`}
              onClick={closeMobileMenu}
            >
              Acasă
            </Link>
            <Link 
              href="/despre" 
              className={`block px-3 py-4 hover:opacity-75 transition-opacity rounded-lg hover:bg-white hover:bg-opacity-10 border-b border-[#7A1E39] border-opacity-30 ${isActiveMobile('despre')}`}
              onClick={closeMobileMenu}
            >
              Despre
            </Link>
            <Link 
              href="/servicii" 
              className={`block px-3 py-4 hover:opacity-75 transition-opacity rounded-lg hover:bg-white hover:bg-opacity-10 border-b border-[#7A1E39] border-opacity-30 ${isActiveMobile('servicii')}`}
              onClick={closeMobileMenu}
            >
              Servicii
            </Link>
            <Link 
              href="/lucrari" 
              className={`block px-3 py-4 hover:opacity-75 transition-opacity rounded-lg hover:bg-white hover:bg-opacity-10 border-b border-[#7A1E39] border-opacity-30 ${isActiveMobile('lucrari')}`}
              onClick={closeMobileMenu}
            >
              Lucrări
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-4 hover:opacity-75 transition-opacity rounded-lg hover:bg-white hover:bg-opacity-10 border-b border-[#7A1E39] border-opacity-30 ${isActiveMobile('contact')}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
