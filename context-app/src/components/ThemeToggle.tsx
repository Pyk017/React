import { Component, useContext } from "react";
import { ThemeContext, ThemeContextState } from "../contexts/ThemeContext";

// interface ThemeToggleProps {}

// interface ThemeToggleState {}

// class ThemeToggle extends Component<ThemeToggleProps, ThemeToggleState> {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme }: ThemeContextState = this
//       .context as ThemeContextState;

//     return <button onClick={toggleTheme}>Toggle Theme</button>;
//   }
// }

// export default ThemeToggle;

const ThemeToggle = () => {
  const { toggleTheme }: any = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
