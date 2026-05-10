import Image from 'next/image';

const features = [
  {
    title: 'Experienced Specialists',
    description: 'Our team consists of board-certified dentists with years of specialized experience.',
  },
  {
    title: 'Modern Technology',
    description: 'We use the latest digital X-rays and 3D imaging for precise diagnosis.',
  },
  {
    title: 'Comfortable Environment',
    description: 'Relax in our spa-like atmosphere designed to ease dental anxiety.',
  },
  {
    title: 'Flexible Financing',
    description: 'We offer various payment plans to make quality care affordable for everyone.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Dental Care
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to providing the highest standard of dental care in a welcoming and professional environment.
            </p>

            <div className="mt-12 space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/clinic-interior.png"
                alt="Modern Clinic Interior"
                width={800}
                height={1000}
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
