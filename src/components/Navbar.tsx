"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/65 backdrop-blur-md py-4 px-6 shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">Raihan</h1>

        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setDrawerOpen(!drawerOpen)}>
            {drawerOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Drawer From Top */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full bg-white dark:bg-black/65 z-40 shadow-md flex flex-col items-center gap-4 py-4 md:hidden"
          >
            <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
