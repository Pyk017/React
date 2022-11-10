import { useContext, createContext, useReducer } from "react";

export interface ThemeComponentState {
  bg: string;
  syntax: string;
  ui: string;
}

export interface ThemeContextState {
  isLightTheme: boolean;
  light: ThemeComponentState;
  dark: ThemeComponentState;
}

export interface ThemeContextProps extends ThemeContextState {
  dispatch: React.Dispatch<string>;
}

export const ThemeContext = createContext<ThemeContextState | null>(null);

export const ACTIONS = {
  DARK: "dark",
  LIGHT: "light",
  TOGGLE: "toggle",
};

function reducer(state: ThemeContextState, type: string) {
  switch (type) {
    case ACTIONS.LIGHT:
      return { ...state, isLightTheme: true };

    case ACTIONS.DARK:
      return { ...state, isLightTheme: false };

    case ACTIONS.TOGGLE:
      return { ...state, isLightTheme: !state.isLightTheme };
    default:
      return state;
  }
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, dispatch] = useReducer(reducer, {
    isLightTheme: true,
    light: { syntax: "#1b1523", bg: "#fff", ui: "#e6e6e6" },
    dark: { syntax: "#fff", bg: "#101010", ui: "#555" },
  });

  return (
    <ThemeContext.Provider value={{ ...theme, dispatch } as ThemeContextProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
