"use client";
import { useState } from "react";
import { FiMenu, FiX, FiTruck } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-swiftGreen font-bold text-xl">
          <FiTruck className="text-2xl" />
          <span>SwiftHaul</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/">What We Do</Link>
          <Link href="/">Resources</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-3 animate-fade-in">
          <Link href="/">Home</Link>
          <Link href="/">What We Do</Link>
          <Link href="/">Resources</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </nav>
  );
}
