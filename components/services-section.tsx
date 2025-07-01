"use client";

import { FaCapsules, FaHeartbeat, FaSyringe, FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "24-Hour Pharmacy",
    description:
      "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    icon: <FaCapsules size={28} className="text-purple-500" />,
    bg: "bg-purple-100",
  },
  {
    title: "Medical Check Up",
    description:
      "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    icon: <FaHeartbeat size={28} className="text-green-500" />,
    bg: "bg-green-100",
  },
  {
    title: "Professional Doctor",
    description:
      "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
    icon: <FaSyringe size={28} className="text-blue-500" />,
    bg: "bg-blue-100",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f6faff] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            List of Services
          </h2>
          <p className="text-gray-500 max-w-xl text-left">
            A hospital is an integral part of a social and health organization, serving the
            function of providing comprehensive (holistic) care.
          </p>
        </div>

        {/* Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start text-left"
            >
              {/* Icon circle */}
              <div className={`rounded-full p-4 mb-4 ${service.bg}`}>{service.icon}</div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{service.description}</p>

              {/* Button */}
              <a
                href="https://wa.me/8801720151612"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90 transition"
              >
                <FaWhatsapp />
                <span>Reservasi</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
