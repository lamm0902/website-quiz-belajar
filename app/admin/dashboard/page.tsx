"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/komponen/Sidebar";

export default function AdminDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row text-white">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 space-y-10">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Selamat Datang, Admin!
          </h1>
          <p className="text-gray-100 mt-1 text-sm">
            Kelola data pengguna dan kuis dengan mudah dan cepat.
          </p>
        </header>

        {/* Statistik */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Total Pengguna" value="124" />
          <DashboardCard title="Total Kuis" value="37" />
          <DashboardCard title="Kuis Hari Ini" value="5" />
        </section>

        {/* Daftar Pengguna */}
        <section className="bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">
            Daftar Pengguna
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {[
                  { name: "Ali", email: "ali@gmail.com", role: "user" },
                  { name: "Budi", email: "budi@gmail.com", role: "admin" },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-sky-400 transition">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2 capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Daftar Kuis */}
        <section className="bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Daftar Kuis</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Judul</th>
                  <th className="px-4 py-2 text-left">Mata Pelajaran</th>
                  <th className="px-4 py-2 text-left">Kelas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {[
                  { title: "Kuis Pecahan", mapel: "Matematika", kelas: "7" },
                  {
                    title: "Teks Narasi",
                    mapel: "Bahasa Indonesia",
                    kelas: "8",
                  },
                ].map((quiz, i) => (
                  <tr key={i} className="hover:bg-sky-400 transition">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{quiz.title}</td>
                    <td className="px-4 py-2">{quiz.mapel}</td>
                    <td className="px-4 py-2">{quiz.kelas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow hover:shadow-md transition">
      <h2 className="text-sm font-bold text-white mb-1">{title}</h2>
      <p className="text-3xl font-medium text-sky-400">{value}</p>
    </div>
  );
}
