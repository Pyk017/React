import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface ThemeComponentsState {
  background: string;
  syntax: string;
  ui: string;
}

export interface ThemeContextState {
  isLightTheme: boolean;
  light: ThemeComponentsState;
  dark: ThemeComponentsState;
}

export interface ThemeContextProps extends ThemeContextState {
  toggleTheme?: () => void;
}

export type toggleThemeType = {
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextState | null>(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useLocalStorage("THEME", {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#fcf5f5", background: "#e6e6e6" },
    dark: { syntax: "#eee", ui: "#333", background: "#555" },
  });

  const toggleTheme = () => {
    setState({
      ...state,
      isLightTheme: !state?.isLightTheme,
    } as ThemeContextState);
  };

  return (
    <ThemeContext.Provider
      value={{ ...state, toggleTheme } as ThemeContextProps}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
