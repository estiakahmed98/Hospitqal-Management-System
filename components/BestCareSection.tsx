"use client";

import Image from "next/image";
import { FaStar, FaUserMd, FaWhatsapp } from "react-icons/fa";

const BestCareSection = () => {
  return (
    <section className="bg-[#f6faff] py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-44">
        {/* Left Image Side */}
        <div className="relative w-full max-w-xl">
          <Image
            src="/images/care.png"
            alt="Best care"
            width={700}
            height={500}
            className="rounded-2xl w-full h-auto object-cover"
          />

          {/* Review Badge */}
          <div className="absolute bottom-24 right-[-5%] bg-white shadow-lg rounded-xl px-4 py-3 flex items-center space-x-3 z-10">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <FaUserMd />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Quality over Quantity</p>
              <div className="flex text-yellow-400 text-xs mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Text Side */}
        <div className="max-w-xl text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            The best care from medical experts.
          </h2>
          <p className="text-gray-500 mb-6">
            A hospital is an integral part of a social and health organization,
            functioning to provide comprehensive (holistic) services.
          </p>
          <a
            href="https://wa.me/8801720151612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:opacity-90 transition"
          >
            <FaWhatsapp />
            <span>Reservasi</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestCareSection;
