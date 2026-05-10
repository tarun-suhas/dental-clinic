'use client';

import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Jeanette Hoff',
    role: 'Orthodontic Treatment',
    education: 'Yale Medical School',
    image: '/Doctor01.png',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'General Dentistry',
    education: 'Harvard Dental School',
    image: '/Doctor02.png',
  },
  {
    name: 'Dr. Robert Miller',
    role: 'Oral Surgery',
    education: 'Stanford University',
    image: '/Doctor03.png',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Pediatric Dentistry',
    education: 'Columbia University',
    image: '/Doctor04.png',
  },
];



export default function Doctors({ limit }: { limit?: number }) {
  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section id="doctors" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">Our Experts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Professional Team
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our team of highly skilled and compassionate dental professionals is dedicated to providing you with the best care possible.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {displayedDoctors.map((doctor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-64 w-64 overflow-hidden rounded-full transition-all duration-300">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{doctor.name}</h3>
                <p className="mt-3 text-lg font-medium text-gray-500">{doctor.role}</p>
                <p className="text-lg text-gray-500">{doctor.education}</p>
              </div>

              <div className="mt-8">
                <Link
                  href="/#appointment"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-transparent px-10 py-3 text-lg font-medium text-primary transition-all hover:bg-primary/5 active:scale-95"
                >
                  Appointment
                </Link>
              </div>


            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all"
            >
              See All Doctors
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


