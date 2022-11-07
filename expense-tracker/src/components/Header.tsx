import Form from "react-bootstrap/Form";
import { toggleThemeType } from "../contexts/ThemeContext";

const Header = ({ toggleTheme }: toggleThemeType) => {
  return (
    <div className="parent">
      <div></div>
      <h2 className="d-flex display-6 mb-3 fw-normal div1 justify-content-end">
        Expense Tracker
      </h2>
      <Form className="div2">
        <Form.Check
          type="switch"
          id="theme-switch"
          label="Toggle Theme"
          onChange={toggleTheme}
        />
      </Form>
    </div>
  );
};

export default Header;
