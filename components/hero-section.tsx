"use client";

import { FaStethoscope, FaHome } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F7FF] py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text leading-tight mb-4">
            Klinik 24 is ready to serve the <br />
            public&apos;s concerns 24/7.
          </h2>
          <p className="text-gray-500 mb-8">
            A hospital is an integral part of a social and health organization, with the
            function of providing comprehensive services.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            <FaStethoscope />
            <span>View Services</span>
          </a>
        </div>

        {/* Right Image + Badge */}
        <div className="relative">
          {/* Doctor Image */}
          <Image
            src="/images/HeroImage.png"
            alt="Doctor Hero"
            width={500}
            height={500}
            className="relative z-10"
          />

       

          {/* Blue Circle Background */}
          <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-blue-500 rounded-full -z-10 translate-x-1/3 -translate-y-1/4 opacity-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
