"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    alamat: "",
    whatsapp: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data profil berhasil disimpan");
    // Kirim ke backend di sini jika sudah siap
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Password baru tidak cocok");
      return;
    }
    alert("Password berhasil diubah");
    // Kirim ke backend di sini jika sudah siap
  };

  const displayName = formData.name.trim() || "Pengguna";

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-300 via-blue-100 to-cyan-200 flex flex-col items-center justify-start px-6 py-12 font-sans">
      {/* Kata Sambutan */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-wide text-center max-w-3xl">
        Selamat datang di Profile Anda!
      </h1>

      {/* Container kedua card berdampingan */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10">
        {/* Card Ubah Profil */}
        <div className="flex-1 bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">
            Edit Profil
          </h2>

          <form onSubmit={handleProfileSubmit} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-0">
              <InputField
                label="Nama Lengkap"
                name="name"
                value={formData.name}
                onChange={handleProfileChange}
                placeholder="Masukkan nama lengkap"
              />
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleProfileChange}
                type="email"
                placeholder="contoh@mail.com"
              />
              <InputField
                label="Alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleProfileChange}
                placeholder="Masukkan alamat lengkap"
              />
              <InputField
                label="WhatsApp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleProfileChange}
                placeholder="081234567890"
                type="tel"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Simpan Perubahan Profil
            </button>
          </form>
        </div>

        {/* Card Ubah Password */}
        <div className="flex-1 bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2">
            Ubah Password
          </h2>

          <form onSubmit={handlePasswordSubmit} className="space-y-8">
            <InputField
              label="Password Lama"
              name="oldPassword"
              type="password"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              placeholder="Masukkan password lama"
            />
            <InputField
              label="Password Baru"
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Masukkan password baru"
            />
            <InputField
              label="Konfirmasi Password Baru"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Konfirmasi password baru"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Simpan Password Baru
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              Kembali ke Halaman
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className="
          w-full
          border
          border-gray-300
          rounded-xl
          px-5
          py-3
          text-gray-900
          placeholder-gray-400
          focus:outline-none
          focus:ring-4
          focus:ring-blue-400
          focus:border-blue-500
          transition
          duration-300
          shadow-sm
          hover:shadow-md
        "
      />
    </div>
  );
}
