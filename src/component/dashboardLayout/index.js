import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import NavigationBar from "../navigationBar";
import { useStyles } from "./style";

function DashboardLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <NavigationBar />
      <Box component="main" className={classes.root}>
        {children}
      </Box>
      <div className={classes.spacer} />
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
