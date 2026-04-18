"use client";

import * as React from "react";

type ThemeProviderProps = React.ComponentProps<"div"> & {
  defaultTheme?: string;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "staynow-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setTheme(stored);
    }
  }, [storageKey]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: string) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <div {...props}>
      {React.cloneElement(children as React.ReactElement, { theme })}
    </div>
  );
}
