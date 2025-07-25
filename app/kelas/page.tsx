'use client';

import { useRouter } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

const kelasList = ['Kelas 7', 'Kelas 8', 'Kelas 9'];

export default function KelasPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-cyan-100 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <GraduationCap className="inline-block w-8 h-8 text-cyan-700 mr-2" />
          Pilih Kelas
        </h1>
        <p className="text-gray-600 mb-10 text-sm md:text-base max-w-xl mx-auto">
          Jelajahi kuis berdasarkan tingkat kelas kamu.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {kelasList.map((kelas) => (
            <button
              key={kelas}
              onClick={() => router.push(`/kuis/kelas/${kelas.split(' ')[1]}`)}
              className="bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-md 
              text-gray-900 py-3 px-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-200"
            >
              {kelas}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
