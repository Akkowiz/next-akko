"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { themesDaisy } from "@/tailwind.config";
import {} from "react";

const ThemeController = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  useLayoutEffect(() => {
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

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn">
        Theme
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box"
      >
        {themesDaisy.map((theme) => (
          <li key={theme}>
            <a onClick={() => changeTheme(theme)}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;
