import { Component, useContext } from "react";
import { ThemeContext, ThemeContextState } from "../contexts/ThemeContext";
import { AuthContext, AuthContextState } from "../contexts/AuthContext";

// interface NavBarProps {}

// interface NavBarState {}

// class NavBar extends Component<NavBarProps, NavBarState> {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth }: AuthContextState =
//                 authContext as AuthContextState;
//               const { isLightTheme, light, dark }: ThemeContextState =
//                 themeContext as ThemeContextState;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav
//                   style={{
//                     background: theme.ui,
//                     color: theme.syntax,
//                   }}
//                 >
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged In" : "Logged Out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default NavBar;

const NavBar = () => {
  const { isLightTheme, light, dark }: any = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth }: any = useContext(AuthContext);

  return (
    <nav
      style={{
        background: theme.ui,
        color: theme.syntax,
      }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
