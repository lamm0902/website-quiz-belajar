"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Validasi login admin sementara (bisa diganti dengan request ke backend)
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      router.push("/admin/dashboard");
    } else {
      alert("Email atau password admin salah!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kiri / Branding Panel */}
      <div className="hidden md:flex w-1/2 bg-gray-800 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
          <p className="text-lg text-gray-300">
            Kelola pengguna, kuis, dan sistem Quiz Belajar dengan mudah.
          </p>
        </div>
      </div>

      {/* Kanan / Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 
      bg-gradient-to-br from-gray-50 to-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg 
          p-10 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 tracking-tight">
            Login Admin
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg 
            focus-within:ring-2 focus-within:ring-gray-800 transition">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg 
            focus-within:ring-2 focus-within:ring-gray-800 transition">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium 
            py-3 rounded-lg shadow-md transition-all"
          >
            Masuk Admin
          </button>

          {/* Kembali ke login siswa */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Kembali ke{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline font-medium transition"
            >
              Login Siswa
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
