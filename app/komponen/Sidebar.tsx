"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart,
  LogOut,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "Kelola Pengguna", icon: Users, href: "/admin/pengguna" },
  { label: "Kelola Kuis", icon: FileText, href: "/admin/kuis" },
  { label: "Statistik", icon: BarChart, href: "/admin/statistik" },
  { label: "Logout", icon: LogOut, href: "/login/admin" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-gray-800 border-r border-gray-700 h-auto md:h-screen shadow-sm z-20">
      <div className="p-5 border-b border-gray-700 flex items-center justify-between md:justify-center">
        <h2 className="text-xl font-bold text-sky-400">Admin Panel</h2>
      </div>

      <nav className="flex md:flex-col flex-row md:items-start items-center md:space-y-1 space-x-2 
      md:space-x-0 p-2 md:p-4 overflow-x-auto">
        {menu.map(({ label, icon: Icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium 
                transition-all duration-200
              ${
                isActive
                  ? "bg-gray-700 text-sky-400 font-semibold"
                  : "text-white hover:bg-white/10 hover:text-sky-500"
              }
            `}
            >
              <Icon
                size={20}
                className={isActive ? "text-sky-400" : "text-white"}
              />
              <span className="hidden md:inline">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
