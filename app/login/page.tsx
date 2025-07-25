"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "siswa1@example.com" && password === "siswa123") {
      // Simpan data login ke localStorage
      localStorage.setItem("token", "fake-token-siswa");
      localStorage.setItem("role", "siswa");
      localStorage.setItem("user", JSON.stringify({ email, role: "siswa" }));

      router.push("/"); // Arahkan ke halaman utama setelah login
    } else {
      alert("Email atau password salah.");
    }
  };

  const goToAdminLogin = () => {
    router.push("/login/admin");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 bg-cyan-600 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Quiz Belajar</h1>
          <p className="text-lg">
            Platform belajar interaktif untuk latihan soal dan uji pengetahuan
            kamu!
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 
      bg-gradient-to-br from-gray-50 to-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white border border-gray-200 rounded-2xl 
          shadow-lg p-10 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 tracking-tight">
            Selamat Datang Kembali
          </h2>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 
            rounded-lg focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none text-sm placeholder-gray-400 text-gray-800 bg-transparent"
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
            focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none text-sm placeholder-gray-400 text-gray-800 bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm 
            font-medium py-3 rounded-lg shadow-md transition-all"
          >
            Login Sebagai Siswa
          </button>

          {/* Login Admin */}
          <button
            type="button"
            onClick={goToAdminLogin}
            className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 
            font-medium py-3 rounded-lg shadow-inner transition-all"
          >
            Admin
          </button>

          {/* Link ke register */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Belum punya akun?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium transition"
            >
              Daftar di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
