'use client';

import { useRouter } from 'next/navigation';
import { Brain, ClipboardList, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-200 to-white text-gray-800">
      {/* Navbar Reusable */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Selamat Datang di <span className="text-cyan-700">Quiz Belajar</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Platform belajar interaktif untuk latihan soal, uji pengetahuan, dan persiapan ujian dengan cara yang menyenangkan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push('/mapel')}
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 
            rounded-lg font-medium shadow transition"
          >
            Mata Pelajaran
          </button>
          <button
            onClick={() => router.push('/kelas')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 
            rounded-lg font-medium shadow transition"
          >
            Kelas
          </button>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <ClipboardList className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beragam Soal</h3>
            <p className="text-gray-600 text-sm">
              Tersedia banyak soal dari berbagai mata pelajaran dan tingkat.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Latihan Interaktif</h3>
            <p className="text-gray-600 text-sm">
              Belajar jadi seru dengan tampilan kuis yang menarik dan interaktif.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pantau Kemajuan</h3>
            <p className="text-gray-600 text-sm">
              Lihat hasil dan progres kamu setiap kali menyelesaikan kuis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
