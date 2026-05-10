import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import AppointmentForm from '@/components/AppointmentForm';
import Newsletter from '@/components/Newsletter';
import Location from '@/components/Location';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services limit={3} />
        <Features />
        <Doctors limit={4} />
        <Testimonials />
        <AppointmentForm />
        <Location />
        <Newsletter />
      </main>


      <Footer />
    </div>
  );
}
