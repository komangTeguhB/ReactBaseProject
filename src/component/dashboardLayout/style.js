import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(11, 3, 0),
    minHeight: "calc(100vh - 112px)",
    padding: theme.spacing(3),

    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(8.5, 1.5, 0),
      minHeight: "calc(100vh - 80px)",
      padding: theme.spacing(1.5),
    },
  },
  spacer: {
    height: theme.spacing(3),

    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(1.5),
    },
  },
}));
