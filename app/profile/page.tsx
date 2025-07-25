"use client";

import { useState } from "react";
import { Pencil, Lock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

// Data mentahan profil & quiz
const profile = {
  nama: "Muhammad Nur Ilham",
  email: "lammboy123@gmail.com",
  alamat: "Jl. Pendidikan No. 10, Bantaeng",
  kelas: "XII IPA 1",
  whatsapp: "081234567890",
  password: "************",
};

const quizHistory = [
  {
    judul: "Quiz Matematika Dasar",
    tanggal: "2025-07-01",
    status: "Selesai",
    skor: 85,
  },
  {
    judul: "Quiz Bahasa Inggris",
    tanggal: "2025-07-10",
    status: "Selesai",
    skor: 92,
  },
  {
    judul: "Quiz Fisika",
    tanggal: "2025-07-20",
    status: "Belum Selesai",
    skor: null,
  },
];

export default function ProfilePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-white to-cyan-100 text-gray-800">
      <Navbar />

      <section className="w-full px-4 py-10 md:py-12">
        {/* Judul & Deskripsi */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-1 text-gray-800">
          Selamat Datang, {profile.nama.split(" ")[0]}!
        </h1>
        <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
          Berikut adalah informasi lengkap akun Anda dan quiz yang telah Anda
          ikuti.
        </p>

        {/* Konten 2 kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Kiri - Profil */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md shadow-cyan-100 
          p-6 border border-cyan-100 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 
                w-full flex items-center justify-center">
                  <div className="bg-cyan-100 text-cyan-600 p-4 rounded-xl">
                    <User size={40} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium">Profil Anda</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "Nama Lengkap", value: profile.nama },
                  { label: "Email", value: profile.email },
                  { label: "Alamat", value: profile.alamat },
                  { label: "Kelas", value: profile.kelas },
                  { label: "WhatsApp", value: profile.whatsapp },
                  { label: "Password", value: profile.password },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/60 p-4 rounded-xl border border-cyan-100 hover:bg-cyan-50 transition"
                  >
                    <ProfileField label={item.label} value={item.value} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol bawah */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
              <button
                onClick={() => setShowEditModal(true)}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white 
                px-5 py-2.5 rounded-lg text-sm shadow-md transition-all duration-200"
              >
                <Pencil className="w-4 h-4" /> Edit Profil
              </button>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="flex items-center gap-2 bg-white text-cyan-700 border border-cyan-600 
                hover:bg-cyan-400 hover:text-white px-5 py-2.5 rounded-lg text-sm shadow-sm transition-all duration-200"
              >
                <Lock className="w-4 h-4" /> Ubah Password
              </button>
            </div>
          </div>

          {/* Kanan - Quiz History */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md shadow-cyan-100 p-6 
          border border-cyan-100 flex flex-col max-h-[500px]">
            <h2 className="text-xl font-semibold mb-4">
              Quiz yang Pernah Diikuti
            </h2>
            <div className="overflow-y-auto flex-1">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left bg-cyan-100 text-cyan-800">
                    <th className="py-2 px-4">Judul</th>
                    <th className="py-2 px-4">Tanggal</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Skor</th>
                  </tr>
                </thead>
                <tbody>
                  {quizHistory.map((quiz, index) => (
                    <tr
                      key={index}
                      className="border-t border-cyan-100 hover:bg-cyan-50 transition"
                    >
                      <td className="py-2 px-4">{quiz.judul}</td>
                      <td className="py-2 px-4">{quiz.tanggal}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            quiz.status === "Selesai"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {quiz.status}
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        {quiz.skor !== null ? quiz.skor : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Edit Profil */}
      <AnimatePresence>
        {showEditModal && (
          <Modal title="Edit Profil" onClose={() => setShowEditModal(false)}>
            <form className="space-y-4">
              <Input label="Nama Lengkap" defaultValue={profile.nama} />
              <Input label="Email" defaultValue={profile.email} />
              <Input label="Alamat" defaultValue={profile.alamat} />
              <Input label="Kelas" defaultValue={profile.kelas} />
              <Input label="WhatsApp" defaultValue={profile.whatsapp} />
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow"
                  onClick={() => setShowEditModal(false)}
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>

      {/* Modal Ubah Password */}
      <AnimatePresence>
        {showPasswordModal && (
          <Modal
            title="Ubah Password"
            onClose={() => setShowPasswordModal(false)}
          >
            <form className="space-y-4">
              <Input label="Password Lama" type="password" />
              <Input label="Password Baru" type="password" />
              <Input label="Konfirmasi Password Baru" type="password" />
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg text-sm shadow"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Simpan Password
                </button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}

// Komponen Field Profil
function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}

// Komponen Input
function Input({
  label,
  defaultValue = "",
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
}

// Komponen Modal
function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ duration: 0.25 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative"
      >
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}
