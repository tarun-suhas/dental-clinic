'use client';

import Link from 'next/link';
import Image from 'next/image';



export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-accent">

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
        </div>


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


      </div>
    </nav>
  );
}
