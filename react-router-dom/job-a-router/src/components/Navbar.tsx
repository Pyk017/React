import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ColorModeContext } from "../App";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Help",
    link: "/help",
  },
  {
    id: 4,
    label: "Career",
    link: "/careers",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Job-a-router
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item.id} to={item.link}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  // color: "#fff",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            JOB-A-ROUTER
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </NavLink>
            ))}
            <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
