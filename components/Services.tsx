'use client';

import { useState } from 'react';
import { 
  Smile, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  Clock,
  X,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive exams, cleanings, and preventative care for all ages.',
    detailedDescription: 'Our General Dentistry services focus on maintaining your overall oral health. This includes regular checkups, professional cleanings, digital X-rays, and customized preventative plans. We aim to catch issues early and provide long-lasting solutions for your teeth and gums.',
    icon: Stethoscope,
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced professional whitening treatments for a brighter, more confident smile.',
    detailedDescription: 'Using advanced professional-grade whitening agents, we can brighten your smile by several shades in just one visit. Our treatments are safer and more effective than over-the-counter kits, specifically formulated to minimize sensitivity while maximizing brilliance.',
    icon: Sparkles,
  },
  {
    title: 'Orthodontics',
    description: 'Modern braces and clear aligner solutions to straighten your teeth effectively.',
    detailedDescription: 'From traditional braces to modern clear aligners like Invisalign, we offer solutions to straighten your teeth and improve your bite. We work with patients of all ages to create a perfectly aligned smile that is both beautiful and functional.',
    icon: Smile,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions to replace missing teeth and restore function.',
    detailedDescription: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function just like natural teeth. Our specialists use precision technology to place implants that provide a lifelong foundation for your new smile.',
    icon: ShieldCheck,
  },
  {
    title: 'Emergency Care',
    description: 'Immediate assistance for dental emergencies to relieve pain and prevent issues.',
    detailedDescription: 'If you have a dental emergency (like a knocked-out tooth or severe pain), please call us immediately. We prioritize emergency cases and offer same-day appointments to relieve your discomfort and save your natural teeth.',
    icon: HeartPulse,
  },
  {
    title: 'Sedation Dentistry',
    description: 'Comfortable and anxiety-free dental experiences for sensitive patients.',
    detailedDescription: 'We offer various sedation options to help you feel completely relaxed during your treatment. Whether you have dental anxiety or are undergoing a long procedure, our safe sedation techniques ensure a comfortable and stress-free experience.',
    icon: Clock,
  },
];

export default function Services({ limit }: { limit?: number }) {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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
              onClick={() => setSelectedService(service)}
              className="group relative rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100 cursor-pointer"
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
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setSelectedService(null)}
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="bg-primary px-8 py-10 text-white">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  <selectedService.icon className="h-8 w-8" />
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="rounded-full p-2 hover:bg-white/10 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <h3 className="mt-6 text-3xl font-bold">{selectedService.title}</h3>
            </div>
            <div className="p-8">
              <p className="text-xl font-medium text-gray-900">{selectedService.description}</p>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600 leading-relaxed text-base">
                  {selectedService.detailedDescription}
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#appointment"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 rounded-2xl bg-primary px-6 py-4 text-center text-sm font-bold text-white shadow-lg hover:bg-primary/90 transition-all active:scale-95"
                >
                  Book This Service
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 rounded-2xl border border-gray-200 px-6 py-4 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


