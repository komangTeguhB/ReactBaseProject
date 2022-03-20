import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: "100%",
    borderRadius: "3px",
  },
  submit: {
    width: "15%",
    margin: theme.spacing(3, 0, 2),
  },
  closeButton: {
    width: "11%",
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#F7F7F7",
  },
  add: {
    margin: theme.spacing(3, 0, 2),
    height: "24px",
    width: "70%",
  },
  boxStyle: {
    borderBottom: "2px solid #F2F2F2",
    textAlign: "center",
  },
  tableCellPadding: {
    padding: "12px 10px 12px 12px !important",
  },
  tableTitleCellStyle: {
    padding: "12px 12px 12px 12px",
    border: "1px solid #cfcfcf",
  },
  boxSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputSelectStyle: {
    fontSize: 14,
  },
  formControlLabel: {
    marginLeft: "10px",
  },
  topSectionContainerStyle: {
    minHeight: "253px",
  },
  bottomSectionContainerStyle: {
    minHeight: "76px",
  },
  tableBorder: {
    border: "1px solid #cfcfcf",
  },
  merchantTitleStyle: {
    paddingLeft: "22px !important",
  },
  paddingContainerStyle: {
    paddingTop: "28px",
  },
  paddingRightForm: {
    position: "relative",
    top: "28px",
  },
  paddingRightFormDisplayName: {
    position: "relative",
    top: "28px",
  },
}));

export const dialogContentStyle = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
});

export const dialogActionStyle = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
});
