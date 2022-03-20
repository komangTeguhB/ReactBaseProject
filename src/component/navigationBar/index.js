import { AppBar, Link, Toolbar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { ReactComponent as Banner } from "../../assets/banner.svg";
import history from "../../shared/history";
import { useStyles } from "./style";

const links = [
  {
    label: "Payments",
    type: "primary",
    url: "/admin/dashboard/payment",
    icon: <CreditCardIcon />,
  },
  {
    label: "Accounts",
    type: "primary",
    url: "/admin/dashboard/account",
    icon: <PeopleIcon />,
  },
];

function NavigationBar() {
  const classes = useStyles();

  const renderDesktop = () => (
    <>
      <div className={classes.brand}>
        <b>ADMINISTRATOR SYSTEM</b>
      </div>
      <ul className={`${classes.navigation} ${classes.flex}`}>
        {links.reduce(
          (result, path) =>
            path.type === "primary"
              ? result.push(
                  <li
                    key={path.url}
                    className={
                      history.location.pathname === path.url
                        ? "active"
                        : undefined
                    }
                  >
                    <Link component={RouterLink} to={path.url}>
                      {path.label}
                    </Link>
                  </li>
                ) && result
              : result,
          []
        )}
      </ul>
      <ul className={classes.navigation}>
        <li
          className={`rounded ${
            links.find(
              (path) =>
                path.type === "secondary" &&
                history.location.pathname === path.url
            )
              ? " active"
              : ""
          }`}
        ></li>
      </ul>
    </>
  );

  return (
    <AppBar className={classes.appbar} position="fixed" color="default">
      <Toolbar className={classes.toolbar}>{renderDesktop()}</Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
