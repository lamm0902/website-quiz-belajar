'use client';

import { useRouter } from 'next/navigation';
import { Users, BookOpen, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-cyan-100 text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tentang <span className="text-cyan-700">Quiz Belajar</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Quiz Belajar adalah platform pembelajaran berbasis kuis yang membantu siswa belajar 
          dengan cara yang menyenangkan, interaktif, dan efektif.
        </p>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Visi</h2>
            <p className="text-gray-600">
              Menjadi platform edukasi digital terbaik yang memfasilitasi pembelajaran modern, aktif, 
              dan adaptif untuk generasi masa depan.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Misi</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Menyediakan soal-soal berkualitas dari berbagai mata pelajaran.</li>
              <li>Mempermudah siswa dalam mengakses pembelajaran di mana saja.</li>
              <li>Mendorong siswa untuk belajar secara mandiri dan terarah.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami */}
      <section className="py-16 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-xl font-semibold">Kolaborasi</h3>
              <p className="text-gray-600 text-sm mt-2">Kami percaya pembelajaran yang terbaik terjadi 
                melalui kerja sama dan dukungan satu sama lain.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BookOpen className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-xl font-semibold">Pendidikan Berkualitas</h3>
              <p className="text-gray-600 text-sm mt-2">Konten kami disusun dengan fokus pada kualitas, relevansi, 
                dan keterjangkauan untuk semua pelajar.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Rocket className="w-10 h-10 text-cyan-600 mb-3" />
              <h3 className="text-xl font-semibold">Inovasi</h3>
              <p className="text-gray-600 text-sm mt-2">Kami terus berinovasi untuk menghadirkan pengalaman 
                belajar yang modern dan menyenangkan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Siap Menjadi Lebih Pintar?
          </h2>
          <p className="text-gray-600 mb-8">
            Mulailah perjalanan belajarmu bersama <span className="text-cyan-700 font-semibold">Quiz Belajar</span> dan temukan cara belajar yang menyenangkan dan efektif.
          </p>
          <button
            onClick={() => router.push('/mapel')}
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-medium shadow transition"
          >
            Mulai Belajar
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
