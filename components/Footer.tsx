"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="shadow-lg bg-cyan-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-900 mb-3 relative inline-block 
          after:content-[''] after:block after:w-full after:h-1 after:bg-cyan-500 after:mt-2">
            Quiz Belajar
          </h2>
          <p className="text-cyan-800 text-sm leading-relaxed">
            Platform edukatif yang interaktif dan menyenangkan untuk membantu
            kamu belajar dan menguji pengetahuanmu melalui quiz yang dirancang
            khusus untuk semua kalangan pelajar.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-900 mb-4 relative 
          inline-block after:content-[''] after:block after:w-full after:h-0.5 
          after:bg-cyan-500 after:mt-1">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Beranda" },
              { href: "/quiz", label: "Quiz" },
              { href: "/about", label: "Tentang Kami" },
              { href: "/profile", label: "Akun Saya" },
            ].map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={nav.href}
                  className="group relative inline-block text-cyan-800 transition duration-300"
                >
                  <span className="relative z-10 group-hover:text-gray-800 
                  group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,1)] 
                  transition duration-300">
                    {nav.label}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 
                  transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-900 mb-4 relative inline-block 
          after:content-[''] after:block after:w-full after:h-0.5 after:bg-cyan-500 after:mt-1">
            Kontak Kami
          </h3>
          <ul className="space-y-3 text-sm text-cyan-800">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-cyan-900" />
              <span>
                Email:{" "}
                <a
                  href="mailto:support@quizbelajar.id"
                  className="text-blue-900 font-medium hover:underline"
                >
                  support@quizbelajar.id
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-cyan-900" />
              <span>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6281234567890"
                  className="text-blue-900 font-medium hover:underline"
                >
                  +62 812-3456-7890
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-cyan-900" />
              <span>Alamat: Jl. Pendidikan No. 123, Bantaeng</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-cyan-200 text-center text-sm text-cyan-800 py-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-cyan-900">Quiz Belajar by Muhammad Nur Ilham</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
