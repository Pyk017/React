import { Component, createContext } from "react";

export interface AuthContextState {
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

export const AuthContext = createContext<AuthContextState | null>(null);

class AuthContextProvider extends Component<any, any> {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
