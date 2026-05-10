'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-gray-100 transition-all duration-300 ${
      isMenuOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-accent group-hover:ring-primary transition-all">
            <Image
              src="/webIcon.png"
              alt="BrightSmile Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            BrightSmile
          </span>
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/services" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#features" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/doctors" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
            Doctors
          </Link>
          <Link href="/#testimonials" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
            Testimonials
          </Link>
        </div>


        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link
              href="/#appointment"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-95"
            >
              Book Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-white md:hidden animate-in fade-in slide-in-from-top-5 duration-300 border-t border-gray-50">
          <div className="flex flex-col h-full bg-white px-6 py-8 space-y-2">
            <Link 
              href="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-5 text-lg font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Services
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/#features" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-5 text-lg font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Features
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/doctors" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-5 text-lg font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Doctors
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-5 text-lg font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Testimonials
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <div className="pt-8">
              <Link
                href="/#appointment"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center text-lg font-bold text-white shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  );
}

