'use client';

import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kelas, setKelas] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [showPassword, setShowPassword] = useState(false);


  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, alamat, kelas, whatsapp });
    // TODO: Kirim request ke backend
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel / Branding */}
      <div className="hidden md:flex w-1/2 bg-cyan-800 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Bergabung Sekarang!</h1>
          <p className="text-lg">Buat akun untuk mulai belajar dan mencoba kuis interaktif bersama Quiz Belajar.</p>
        </div>
      </div>

      {/* Right Panel / Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-50 to-white">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-10 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 tracking-tight">
            Daftar Akun Baru
          </h2>

          {/* Nama Lengkap */}
          <FormField
            label="Nama Lengkap"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Lengkap"
            icon={<User className="w-5 h-5 text-gray-400" />}
          />

          {/* Email */}
          <FormField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@gmail.com"
            icon={<Mail className="w-5 h-5 text-gray-400" />}
          />

          {/* Password (with toggle eye) */}
          <FormField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            extraIcon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            }
          />

          {/* Alamat */}
          <FormField
            label="Alamat"
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat Lengkap"
          />

          {/* Kelas */}
          <FormField
            label="Kelas"
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            placeholder="Contoh: 12 IPA 1"
          />

          {/* WhatsApp */}
          <FormField
            label="Nomor WhatsApp"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="08xxxxxxxxxx"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-3 rounded-lg shadow-md transition-all"
          >
            Daftar
          </button>

          {/* Link ke Login */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Sudah punya akun?{' '}
            <a href="/login" className="text-green-600 hover:underline font-medium transition">
              Login di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
  extraIcon,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  extraIcon?: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-500 transition">
        {icon}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
          required
        />
        {extraIcon}
      </div>
    </div>
  );
}
