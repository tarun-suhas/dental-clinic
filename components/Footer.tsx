import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-2 ring-accent group-hover:ring-primary transition-all">

                <Image
                  src="/webIcon.png"
                  alt="BrightSmile Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">BrightSmile</span>
            </Link>


            <p className="text-base text-gray-600 max-w-xs">
              Providing premium dental care since 2010. Your comfort and oral health are our top priorities.
            </p>
            <div className="flex space-x-6">
              {/* Social icons */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/services" className="text-base text-gray-600 hover:text-primary">General Dentistry</Link></li>
                  <li><Link href="/services" className="text-base text-gray-600 hover:text-primary">Teeth Whitening</Link></li>
                  <li><Link href="/services" className="text-base text-gray-600 hover:text-primary">Orthodontics</Link></li>
                  <li><Link href="/services" className="text-base text-gray-600 hover:text-primary">Dental Implants</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/" className="text-base text-gray-600 hover:text-primary">Home</Link></li>
                  <li><Link href="/doctors" className="text-base text-gray-600 hover:text-primary">Our Team</Link></li>
                  <li><Link href="#appointment" className="text-base text-gray-600 hover:text-primary">Book Appointment</Link></li>
                  <li><Link href="#" className="text-base text-gray-600 hover:text-primary">Contact</Link></li>
                </ul>

              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-600">123 Dental St, Wellness City</li>
                  <li className="text-base text-gray-600">+1 (555) 000-0000</li>
                  <li className="text-base text-gray-600">hello@brightsmile.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2026 BrightSmile Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
