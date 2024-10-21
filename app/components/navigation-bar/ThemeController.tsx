'use client';
import { useState, useEffect } from "react";

const ThemeController = () => {
    
  const [theme, setTheme] = useState("light"); // Default theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const themes = ["light", "dark", "aqua", "coffee", "cyberpunk"]; // replace this later

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-2xl"
      >
        {themes.map((t) => (
          <li key={t}>
            <a onClick={() => changeTheme(t)}>{t.charAt(0).toUpperCase() + t.slice(1)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;
