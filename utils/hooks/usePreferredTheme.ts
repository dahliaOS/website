import { useEffect, useState } from "react";

type ThemeTypes = "dark" | "light";

export const usePreferredTheme = (): ThemeTypes => {
  const [theme, setTheme] = useState<ThemeTypes>("dark");

  useEffect(() => {
    const changeTheme = () => {
      let savedTheme = localStorage.getItem("theme");

      // If savedTheme doesn't exist
      if (!savedTheme) {
        localStorage.setItem("theme", "system");
        savedTheme = "system";
      }

      setTheme(
        savedTheme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : (savedTheme as ThemeTypes),
      );
    };

    // run on init
    changeTheme();

    window.addEventListener("storage", changeTheme);

    return () => window.removeEventListener("storage", changeTheme);
  }, []);

  return theme;
};
