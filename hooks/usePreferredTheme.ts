import { useEffect, useState } from "react";

type ThemeTypes = "dark" | "light";
export const usePreferredTheme = (): ThemeTypes => {
  const [theme, setTheme] = useState<ThemeTypes>("dark");

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  }, []);

  return theme;
};
