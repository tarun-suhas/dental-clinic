export default function Location() {
  const mapQuery = encodeURIComponent("Vivekananda Diagnostics, Champapet Rd, SN Reddy Nagar, Hyderabad");
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GOOGLE_MAPS_API_KEY&q=${mapQuery}`;

  // For a dummy view without an API key, we can use a standard embed link
  const dummyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.570220220!2d78.520!3d17.350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sVivekananda%20Diagnostics!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";

  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wide text-primary">Visit Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Location
          </p>
        </div>

        <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
          {/* Map Iframe */}
          <iframe
            src={dummyMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>

          {/* Map Overlay Card (Like the image) */}
          <div className="absolute top-6 left-6 max-w-xs sm:max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">BrightSmile Dental Clinic</h3>
                <p className="mt-1 text-sm text-gray-500">Champapet Rd, SN Reddy Nagar, Hyderabad</p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">5.0</span>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((s, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-blue-600 font-medium">(1,240 reviews)</span>
              </div>

              <div className="flex gap-3">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-primary/90 transition-all"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Directions
                </a>
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 shadow-sm">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
