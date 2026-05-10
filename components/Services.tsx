import { 
  Smile, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  Clock 
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventative care for all ages.',
    icon: Stethoscope,
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced professional whitening treatments for a brighter, more confident smile.',
    icon: Sparkles,
  },
  {
    title: 'Orthodontics',
    description: 'Modern braces and clear aligner solutions to straighten your teeth effectively.',
    icon: Smile,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions to replace missing teeth and restore function.',
    icon: ShieldCheck,
  },
  {
    title: 'Emergency Care',
    description: 'Immediate assistance for dental emergencies to relieve pain and prevent issues.',
    icon: HeartPulse,
  },
  {
    title: 'Sedation Dentistry',
    description: 'Comfortable and anxiety-free dental experiences for sensitive patients.',
    icon: Clock,
  },
];

import Link from 'next/link';

export default function Services({ limit }: { limit?: number }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Dental Solutions
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We provide a wide range of professional dental services to ensure your oral health is always at its best.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                Learn more
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

