import { useState, useEffect } from "react";



function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function ToggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return {theme, ToggleTheme}
}

export default useTheme;
