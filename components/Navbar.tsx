"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Deteksi scroll arah
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah → sembunyikan navbar
        setShowNavbar(false);
      } else {
        // Scroll ke atas → tampilkan navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav
      className={`w-full px-6 py-4 bg-cyan-100/80 backdrop-blur-md shadow-md sticky top-0 z-30 transform transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="text-2xl font-bold tracking-tight text-cyan-800 cursor-pointer"
        >
          Quiz Belajar
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-800">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 text-sm font-semibold">
          {isLoggedIn ? (
            <>
              <NavButton onClick={() => router.push("/")}>Home</NavButton>
              <NavButton onClick={() => router.push("/profile")}>
                Your Account
              </NavButton>
              <NavButton onClick={() => router.push("/grade")}>
                Grade My Quiz
              </NavButton>
              <NavButton onClick={() => router.push("/about")}>About</NavButton>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <NavButton onClick={() => router.push("/login")}>Login</NavButton>
              <RegisterButton onClick={() => router.push("/register")}>
                Register
              </RegisterButton>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 py-4 bg-gray-50 rounded-lg shadow space-y-2 text-sm font-semibold">
          {isLoggedIn ? (
            <>
              <NavMobile onClick={() => router.push("/")}>Home</NavMobile>
              <NavMobile onClick={() => router.push("/profile")}>
                Your Account
              </NavMobile>
              <NavMobile onClick={() => router.push("/grade")}>
                Grade My Quiz
              </NavMobile>
              <NavMobile onClick={() => router.push("/about")}>About</NavMobile>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <NavMobile onClick={() => router.push("/login")}>Login</NavMobile>
              <RegisterButton onClick={() => router.push("/register")}>
                Register
              </RegisterButton>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

// Komponen tombol nav desktop
function NavButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-block text-sm text-gray-800 px-4 py-2 transition-all 
      duration-300 hover:text-cyan-700"
    >
      <span className="relative z-10 group-hover:text-cyan-500 transition duration-300">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
    </button>
  );
}

function LogoutButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md 
      shadow-sm transition-all duration-200 w-full md:w-auto active:scale-95"
    >
      {children}
    </button>
  );
}

function RegisterButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-md 
      shadow-sm transition-all duration-200 w-full md:w-auto active:scale-95"
    >
      {children}
    </button>
  );
}

function NavMobile({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left text-cyan-900 hover:text-cyan-700 hover:bg-cyan-50 
      px-4 py-2 rounded-md transition-all duration-200 active:scale-95"
    >
      {children}
    </button>
  );
}
