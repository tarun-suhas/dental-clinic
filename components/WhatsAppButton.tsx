import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '918712273132';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative h-10 w-10">
        <Image
          src="/whatsAppIcon.png"
          alt="WhatsApp"
          fill
          className="object-contain brightness-0 invert"
        />
      </div>



    </a>
  );
}

