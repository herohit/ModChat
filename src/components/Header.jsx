import { MessageCircle} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
 

  return (
    <header className="md:flex justify-between items-center px-6 py-4 lg:h-16 h-12 bg-white dark:bg-[#0F1923] shadow-md dark:shadow-none hidden">
      <div className="flex items-center space-x-2">
        <h2 className="lg:text-xl text-lg font-semibold tracking-tight">
          ModChat
        </h2>
        <MessageCircle />
      </div>
      {/* Theme toggle */}
     <ThemeToggle/>
    </header>
  );
};

export default Header;
