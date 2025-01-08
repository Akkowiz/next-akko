"use client";
import React from "react";
import { themesDaisy } from "@/tailwind.config";
import { useTheme } from "@/app/components/themeprovider/ThemeProvider";
import PaintBucket from "../page-components/paintbucket";

export default function ThemeController() {
  const { theme, changeTheme } = useTheme();
  const displayedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-base-300">
        <PaintBucket />
        <span className="hidden lg:block">{displayedTheme}</span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 rounded-box"
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
}
