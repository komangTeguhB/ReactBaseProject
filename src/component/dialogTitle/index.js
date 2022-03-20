import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { compose } from "redux";
import { styles } from "./style";

function DialogTitle(props) {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  );
}

DialogTitle.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

export default compose(withStyles(styles))(DialogTitle);
