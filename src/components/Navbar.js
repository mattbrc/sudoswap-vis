import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

// header font jetbrainsmono - 400
// regular text font : rubik 400 / 700
// header and footer text : "Cerebri Sans", sans-serif;

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Swaps",
    href: "/swaps",
  },
  {
    label: "Pools",
    href: "/pools",
  },
  {
    label: "Protocol Data",
    href: "/data",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
  },
  logo: {
    fontFamily: "JetBrains Mono, monospace",
    fontWeight: 600,
    color: "#B9B9FF",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "JetBrains Mono, monospace",
    fontWeight: 600,
    size: "18px",
    color: "#B9B9FF",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Navbar() {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        {sudoLogo}
        <div className={toolbar}>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const sudoLogo = (
    <Typography className={logo} variant="h6" component="h1">
      sudoamm vis 🚀
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <Box>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </Box>
    </header>
  );
}
