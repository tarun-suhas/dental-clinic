import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Doctors from '@/components/Doctors';

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Medical Specialists</h1>
            <p className="mt-4 text-lg text-gray-500">
              Meet our world-class team of dental professionals dedicated to your oral health.
            </p>
          </div>
        </div>
        <Doctors />
      </main>
      <Footer />
    </div>
  );
}
