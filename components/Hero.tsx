'use client';

import Image from 'next/image';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="mr-2">✨</span>
              Trusted by 10,000+ happy patients
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
              Your Smile is Our <br />
              <span className="text-primary">Top Priority.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience world-class dental care with a gentle touch. From routine checkups to complete smile transformations, our expert team uses the latest technology to ensure your comfort and health.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#appointment"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl active:scale-95"
              >
                Schedule Appointment
              </Link>


              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-100 bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-dentist.png"
                alt="Professional Dentist"
                width={800}
                height={800}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-6 backdrop-blur-md shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">100% Safe & Hygienic</h4>
                    <p className="text-xs text-gray-500">Following strict dental safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
