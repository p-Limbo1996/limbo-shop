import { createContext, useContext, useState, type ReactNode } from "react";
type Theme = "light" | "dark";

type TThemeContextProvider = {
  children: ReactNode;
};
type TThemeContext = {
  theme: ReactNode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: TThemeContextProvider) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => useContext(ThemeContext);
