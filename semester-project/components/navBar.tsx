"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import {Menu, X} from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut, User } from "firebase/auth";


const Navigation = () => {
    const currentRoute = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
      });
    return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/prijava");
    } catch (error) {
      console.error("Greška kod odjave:", error);
    }
  };

    const links = [

        { name:"O MENI", href:"/" },
        { name:"PORTFOLIO", href:"/portfolio"},
        { name:"USLUGE", href:"/usluge" },
        { name:"KONTAKT", href:"/kontakt" },
    ];

    return(
    <nav className="w-full px-9 py-1 bg-beige-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between text-darkrose ">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={60}/>
          <span className="font-normal text-2xl -ml-2 pt-1.5">H</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 hover:text-beige-800 hover:font-bold ${
                currentRoute === link.href
                  ? "border-b-2 border-black text-black"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <div className="md:flex gap-6 text-sm font-semibold">
              <Link
                href="/dashboard"
                className={`transition-all duration-200 hover:text-beige-800 hover:font-bold ${
                currentRoute === "/dashboard"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-800"
                }`}
              >
                MOJ KUTAK
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold transition-all duration-200 hover:text-beige-800 hover:font-bold"
              >
                ODJAVA
              </button>

            </div>
          ) : (
            <Link
              href="/prijava"
              className={`text-sm font-semibold transition-all duration-200 hover:text-beige-800 hover:font-bold ${
                currentRoute === "/prijava"
                  ? "border-b-2 border-black text-black"
                  : "text-gray-800"
              }`}
            >
              PRIJAVA
            </Link>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition ${
                currentRoute === link.href ? "text-black font-bold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <div className="md:flex gap-6 text-sm font-semibold">
              <Link
                href="/dashboard"
                onClick={() => setIsMobileOpen(false)}
                className={`block py-2 text-sm font-medium transition ${
                currentRoute === "/dashboard"
                  ? "text-black font-bold" : "text-gray-700"
                }`}
              >
                MOJ KUTAK
              </Link>

              <button
                onClick={handleLogout}
                className="block py-4 text-sm transition hover:text-black font-bold text-gray-700"
              >
                ODJAVA
              </button>

            </div>
          ) : (
            <Link
              href="/prijava"
              onClick={() => setIsMobileOpen(false)}
              className={`block py-2 text-sm font-medium transition ${
                currentRoute === "/prijava"
                  ? "text-black font-bold" : "text-gray-700"
              }`}
            >
              PRIJAVA
            </Link>
          )}

        </div>
      )}
      
    </nav>
    );
};

export default Navigation;