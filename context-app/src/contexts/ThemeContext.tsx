import { Component, createContext } from "react";

interface themeType {
  syntax: string;
  ui: string;
  bg: string;
}

export interface ThemeContextState {
  isLightTheme: boolean;
  light: themeType;
  dark: themeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextState | null>(null);

class ThemeContextProvider extends Component<any, any> {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={
          { ...this.state, toggleTheme: this.toggleTheme } as ThemeContextState
        }
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
