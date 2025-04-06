import { MessageCircle, Moon, Sun } from "lucide-react";
import React, { useState,useEffect } from "react";

const Header = () => {
    const [theme, setTheme] = useState("light");

    // Load saved theme on mount
    useEffect(() => {
      const stored = localStorage.getItem("theme") || "light";
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }, []);
  
    // Toggle theme
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    };

  return (
    <header  className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold">ModChat</h2>
        <MessageCircle />
      </div>
      {/* Theme toggle icon */}
      <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className="p-1.5 cursor-pointer rounded-full  bg-gray-500"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? <Moon size={20} /> : <Sun size={20} color="orange" />}
      </button>
      </div>
    </header>
  );
};

export default Header;
