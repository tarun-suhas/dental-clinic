import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Dental Services</h1>
            <p className="mt-4 text-lg text-gray-500">
              We offer a comprehensive range of dental treatments tailored to your needs.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
