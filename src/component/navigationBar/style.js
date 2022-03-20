import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    WebkitBoxShadow: "0px 2px 6px 0px rgba(0,0,0,0.2)",
    MozBoxShadow: "0px 2px 6px 0px rgba(0,0,0,0.2)",
    boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.2)",
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: 64,

    [theme.breakpoints.down("sm")]: {
      height: 56,
    },
  },
  brand: {
    marginRight: theme.spacing(2),

    "& .banner": {
      height: 36,
    },
  },
  flex: {
    flex: 1,
  },
  navigation: {
    display: "flex",
    height: "100%",
    margin: 0,
    listStyleType: "none",
    padding: 0,

    "& > li": {
      alignItems: "center",
      borderBottom: "3px solid transparent",
      display: "flex",
      flexDirection: "row",
      margin: theme.spacing(0, 0.5),

      "&.active": {
        borderBottom: `3px solid ${theme.palette.primary.main}`,

        "& a": {
          color: theme.palette.primary.main,
        },
      },

      "& a,button": {
        color: theme.palette.grey[600],
        borderRadius: 5,
        fontSize: "1.1250em",
        fontWeight: 600,
        marginTop: theme.spacing(1),
        padding: theme.spacing(0.75, 1),

        "&:hover": {
          backgroundColor: "rgba(225,4,84,0.075)",
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
      },

      "&.rounded": {
        "& a": {
          borderRadius: 999,
          padding: theme.spacing(1),
        },
      },
    },
  },
  toolbar: {
    display: "flex",
  },
  tooltip: {
    maxWidth: 500,
    height: 30,
    fontSize: "0.875em",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1),
  },
  tooltipArrow: {
    fontSize: 20,
    color: "#a7002b",
  },
}));
