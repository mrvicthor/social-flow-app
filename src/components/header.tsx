"use client";
import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 text-white" />
            </Link>
            <span className="text-xl font-bold text-gray-900">SocialFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
            >
              features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
            >
              pricing
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
            >
              about
            </a>
          </nav>
          <button
            className="md:hidden"
            aria-label={showMenu ? "open menu button" : "close menu button"}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <MobileMenu showMenu={showMenu} handleMenu={setShowMenu} />
    </>
  );
};

export default Header;
