import { Button } from "@/components/ui/button";
import { Home, Compass, User, Settings ,SquarePlus} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function FooterItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-xs transition-colors ${
          isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
        }`
      }
    >
      {icon}
      <span className="text-[10px] mt-1">{label}</span>
    </NavLink>
  )
}

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 dark:bg-[#0F1923] border-t md:hidden">
      <div className="flex justify-between px-6 py-2">
        <FooterItem icon={<Home className="w-5 h-5" strokeWidth={3} />} label="Home" to ={'/'} />
        <FooterItem icon={<Compass className="w-5 h-5" strokeWidth={3} />} label="Explore" to={'/explore'}/>
        <FooterItem icon={<SquarePlus className="w-5 h-5" strokeWidth={3} />} label="Add Room" to={'/add-room'}/>
        <FooterItem icon={<User className="w-5 h-5" strokeWidth={3} />} label="Profile" to={'/profile'}/>
        <FooterItem icon={<Settings className="w-5 h-5" strokeWidth={3} />} label="Settings" to={'/settings'}/>
      </div>
    </footer>
  );
};

export default Footer;
