import React,{ useState,useEffect } from "react";
import {  Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
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
    <div className="items-center space-x-2 flex">
      <Sun size={18} className={theme === "light" ? "text-yellow-400" : "text-muted"} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-400"
      />
      <Moon size={18} className={theme === "dark" ? "text-blue-300" : "text-muted"} />
    </div>
  );
};

export default ThemeToggle;
