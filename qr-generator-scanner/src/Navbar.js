import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-500 p-4 mb-10">
      <div className="flex max-w-5xl m-auto justify-around">
        <div className="text-xl font-bold text-white cursor-pointer">
          <Link to="/">QR Code Generator</Link>
        </div>
        <div className="text-xl font-bold text-white cursor-pointer">
          <Link to="/scanner">QR Code Scanner</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
