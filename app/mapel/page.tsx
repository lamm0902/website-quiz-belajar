'use client';

import { useRouter } from 'next/navigation';
import { BookOpenText } from 'lucide-react';

const mapelList = [
  'Matematika',
  'Bahasa Indonesia',
  'Bahasa Inggris',
  'IPA',
];

export default function MataPelajaranPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-cyan-100 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <BookOpenText className="inline-block w-8 h-8 text-cyan-700 mr-2" />
          Pilih Mata Pelajaran
        </h1>
        <p className="text-gray-600 mb-10 text-sm md:text-base max-w-xl mx-auto">
          Temukan kumpulan kuis menarik berdasarkan mata pelajaran favoritmu.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {mapelList.map((mapel) => (
            <button
              key={mapel}
              onClick={() => router.push(`/kuis/mapel/${mapel.toLowerCase().replace(/\s/g, '-')}`)}
              className="bg-white border border-cyan-100 hover:border-cyan-300 hover:shadow-md 
              text-cyan-900 py-3 px-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-200"
            >
              {mapel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
