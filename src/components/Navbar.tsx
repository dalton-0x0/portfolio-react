import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["home", "about", "projects", "contact"];

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", color: "inherit" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
          }}
        >
          Portfolio
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Box
              key={`link-${item}`}
              sx={{
                position: "relative",
                mx: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "100%",
                  height: 2,
                  bgcolor: "primary.main",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                },
              }}
            >
              <Typography
                component={RouterLink}
                to={item === "home" ? "/" : `/${item}`}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setIsOpen(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            component: motion.div,
            initial: { x: 300 },
            animate: { x: 0 },
            transition: { duration: 0.85, ease: "easeOut" },
            sx: { width: 250 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <IconButton onClick={() => setIsOpen(false)} sx={{ mb: 2 }}>
              <CloseIcon />
            </IconButton>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item}
                  component={RouterLink}
                  to={item === "home" ? "/" : `/${item}`}
                  onClick={() => setIsOpen(false)}
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{ textTransform: "capitalize" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
