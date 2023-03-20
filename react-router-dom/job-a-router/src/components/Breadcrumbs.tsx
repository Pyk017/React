import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

const Breadcrumbss = () => {
  const location = useLocation() as any;

  const crumbs = location.pathname
    .split("/")
    .filter((y: string) => y !== "")
    .map((crumb: string) => (
      <Link underline="hover" color="inherit" href={"/" + crumb} key={crumb}>
        {crumb.toLowerCase()}
      </Link>
    ));

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link underline="hover" color="inherit" href="/">
        home
      </Link>
      {crumbs}
    </Breadcrumbs>
  );
};

export default Breadcrumbss;
