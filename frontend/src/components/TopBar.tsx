import React from "react";
import useTheme from "../hooks/useTheme";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

function TopBar() {
  const { theme, ToggleTheme } = useTheme();
  return (
    <div>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <button onClick={ToggleTheme}>{theme === "light" ? <Sun size={14}/> : <Moon size={14} />}</button>
      <li></li>
    </div>
  );
}

export default TopBar;
