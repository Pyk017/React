import { Link } from "react-router-dom";
const MenuList = () => {
  return (
    <>
      <h1>Custom Hooks Examples</h1>
      <ul>
        <li>
          <Link to="/usetoggle">useToggle</Link>
        </li>
        <li>
          <Link to="/usetimeout">useTimeout</Link>
        </li>
        <li>
          <Link to="/usedebounce">useDebounce</Link>
        </li>
        <li>
          <Link to="/useupdate">useUpdateEffect</Link>
        </li>
        <li>
          <Link to="/usearray">useArray</Link>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
