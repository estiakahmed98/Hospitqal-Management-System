"use client";

import { FaFacebookF, FaWhatsapp, FaPlus, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaSquareWebAwesome } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d2e] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Address */}
        <div>
          <div className="flex items-center space-x-1 mb-4">
            <h1 className="text-2xl font-bold">Klinik 24.</h1>
            <sup className="bg-blue-500 text-white rounded-full p-1">
            <FaPlus />
            </sup>
          </div>
          <p className="text-sm text-gray-300 italic leading-relaxed mb-4">
            Jl. Lebak Bulus I Kav. 29 Cilandak<br />
            Jakarta Selatan, DKI Jakarta, Indonesia 12340
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white text-lg">
            <a href="https://github.com/estiakahmed98"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/estiak-ahmed/"><FaLinkedin  /></a>
            <a href="https://www.facebook.com/estiakahmed.tusher/"><FaFacebookF /></a>
            <a href="https://wa.me/8801720151612"><FaWhatsapp /></a>
            <a href="https://estiak-ahmed-portfolio.vercel.app/"><FaSquareWebAwesome /></a>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Karir</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Info Layanan</a></li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Cabang</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Tangerang</a></li>
            <li><a href="#">Jakarta</a></li>
            <li><a href="#">Surabaya</a></li>
            <li><a href="#">Bekasi</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">+626564465455</a></li>
            <li><a href="mailto:info@klinik24.com">info@klinik24.com</a></li>
            <li><a href="#">Telp: +5646544654</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 w-[80%] mx-auto mt-10 pt-6 text-center text-sm text-gray-400">
        Copyright © Klinik24 2025
      </div>
    </footer>
  );
};

export default Footer;
