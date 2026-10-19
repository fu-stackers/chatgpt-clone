import React from "react";
import useTheme from "../hooks/useTheme";
import { PlusCircle, Search, Sun, Bell } from "lucide-react";
import { Moon } from "lucide-react";

function TopBar() {
  const { theme, ToggleTheme } = useTheme();
  return (
    
    <div className="flex border  border-border-light dark:border-dark-border-bg border-t-3 border-b-6 bg-box dark:bg-dark-bg-box gap-6 px-4 py-3 h-fit rounded-3xl mt-4 items-center mr-23">
      <Search className="cursor-pointer" size={20} />
      <PlusCircle className="cursor-pointer" size={20} />
      <Bell className="cursor-pointer" size={20} />
      <div className="flex">
        <button onClick={ToggleTheme} className="cursor-pointer">
          {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="cursor-pointer">profile</div>
    </div>
  );
}

export default TopBar;
