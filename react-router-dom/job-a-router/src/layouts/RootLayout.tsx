import Navbar from "../components/Navbar";
import Breadcrumbss from "../components/Breadcrumbs";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbss />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
