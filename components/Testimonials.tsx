const testimonials = [
  {
    content: "The best dental experience I've ever had. The staff was incredibly friendly and the clinic is state-of-the-art. My teeth have never felt better!",
    author: "Emily Thompson",
    role: "Patient since 2022",
  },
  {
    content: "I was always afraid of the dentist until I visited BrightSmile. They made me feel so comfortable and explained everything clearly. Highly recommended!",
    author: "Michael Roberts",
    role: "Patient since 2023",
  },
  {
    content: "Professional, clean, and efficient. I came in for an emergency and was seen almost immediately. Truly life-saving care.",
    author: "Jessica Lee",
    role: "New Patient",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Patients Say
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="absolute -top-4 left-10 h-8 w-12 bg-primary text-white flex items-center justify-center rounded-lg shadow-md">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 1.983 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
                </svg>
              </div>
              <p className="text-lg leading-8 text-gray-700 italic">
                "{testimonial.content}"
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-gray-50 pt-8">
                <div className="h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
