"use client";

import Image from "next/image";

const partners = [
  { src: "/images/image 1.png", alt: "Karmen Pet Hospital" },
  { src: "/images/image 2.png", alt: "Ciputra" },
  { src: "/images/image 3.png", alt: "St. Jude Hospital" },
  { src: "/images/image 4.png", alt: "Mayapada Hospital" },
  { src: "/images/image 5.png", alt: "Siloam Hospitals" },
];

const PartnerSection = () => {
  return (
    <section className="bg-[#E2EDFF] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Partner &amp; Friend
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-20">
          {partners.map((partner, index) => (
            <div key={index} className="w-[120px] md:w-[140px]">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
