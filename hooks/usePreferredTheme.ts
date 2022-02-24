import { useEffect, useState } from "react";

type ThemeTypes = "dark" | "light";
export const usePreferredTheme = (): ThemeTypes => {
  const [theme, setTheme] = useState<ThemeTypes>("dark");

  useEffect(() => {
    const themeChange = (event: MediaQueryListEvent) =>
      setTheme(event.matches ? "dark" : "light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", themeChange);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", themeChange);
  }, []);

  return theme;
};
