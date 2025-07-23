'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Brain,
  ClipboardList,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div
            onClick={() => router.push('/')}
            className="text-xl font-bold text-cyan-700 cursor-pointer"
          >
            Quiz Belajar
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            {isLoggedIn ? (
              <>
                <NavButton onClick={() => router.push('/')}>Home</NavButton>
                <NavButton onClick={() => router.push('/profile')}>Your Account</NavButton>
                <NavButton onClick={() => router.push('/grade')}>Grade My Quiz</NavButton>
                <NavButton onClick={() => router.push('/about')}>About</NavButton>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <NavButton onClick={() => router.push('/login')}>Login</NavButton>
                <RegisterButton onClick={() => router.push('/register')}>Register</RegisterButton>
              </>
            )}
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 px-2 pb-4 space-y-2 text-sm font-medium">
            {isLoggedIn ? (
              <>
                <NavMobile onClick={() => router.push('/')}>Home</NavMobile>
                <NavMobile onClick={() => router.push('/profile')}>Your Account</NavMobile>
                <NavMobile onClick={() => router.push('/grade')}>Grade My Quiz</NavMobile>
                <NavMobile onClick={() => router.push('/about')}>About</NavMobile>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <NavMobile onClick={() => router.push('/login')}>Login</NavMobile>
                <RegisterButton onClick={() => router.push('/register')}>Register</RegisterButton>
              </>
            )}
          </div>
        )}
      </nav>

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
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg font-medium shadow transition"
          >
            Mata Pelajaran
          </button>
          <button
            onClick={() => router.push('/kelas')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium shadow transition"
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
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Quiz Belajar. All rights reserved.
      </footer>
    </main>
  );
}

// Komponen tombol navigasi umum
function NavButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="text-gray-700 hover:text-cyan-700 px-3 py-2 transition-colors duration-200">
      {children}
    </button>
  );
}

// Komponen tombol logout
function LogoutButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition-all duration-200 w-full md:w-auto"
    >
      {children}
    </button>
  );
}

// Komponen tombol register
function RegisterButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg shadow transition-all duration-200 w-full md:w-auto"
    >
      {children}
    </button>
  );
}

// Komponen navigasi mobile
function NavMobile({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="block w-full text-left text-gray-700 hover:text-cyan-700 px-3 py-2 transition-colors duration-200">
      {children}
    </button>
  );
}
