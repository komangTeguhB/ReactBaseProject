import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Button,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  TableContainer,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import DialogTitle from "./../../component/dialogTitle";
import DashboardLayout from "../../component/dashboardLayout";
import { withStyles } from "@mui/styles";
import { customization } from "../../shared/defaultCaption";
import * as accountActions from "../../redux/accounts/accountsActions";
import { useStyles, dialogContentStyle, dialogActionStyle } from "./style";

const DialogContent = withStyles(dialogContentStyle)(MuiDialogContent);
const DialogActions = withStyles(dialogActionStyle)(MuiDialogActions);

function AccountsPage(props) {
  const { account, accountList, accountAction } = props;

  const classes = useStyles();
  const [nameInput, setNameInput] = useState("");
  const [addDialog, setAddDialog] = useState(false);
  const [accountsData, setAccountsData] = useState([]);
  const [accountObj, setAccountObj] = useState({});

  const prevAccountList = usePrevious(accountList);

  useEffect(() => {
    if (accountsData.length < 1) {
      accountAction.getAllAccount();
    }
  }, [accountsData.length, accountAction]);

  useEffect(() => {
    if (accountList.length > 0 && prevAccountList !== accountList) {
      const newArr = accountList.data.map((account) => {
        return {
          id: account.id,
          name: account.name,
          number: account.number,
          balance: account.balance,
        };
      });
      setAccountsData(newArr);
    }
  }, [accountList, prevAccountList]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const handleCloseDialog = () => {
    setAddDialog(false);
  };

  const handleOpenDialog = (id) => {
    setAddDialog(true);
  };

  const onSave = () => {
    const params = {
      data: {
        name: "tes",
      },
    };
    accountAction.createAccount(params);
  };

  useEffect(() => {
    if (account.data?.id) {
      accountAction.getAllAccount();
    }
  }, [account, accountAction]);

  const accountFormRender = () => {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            className={classes.paddingRightForm}
          >
            <div>Name:</div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={nameInput}
            />
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderDialog = () => {
    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          onClose={handleCloseDialog}
          open={addDialog}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
            <b>{customization.accounts.dialogTitle}</b>
          </DialogTitle>
          <DialogContent>{accountFormRender()}</DialogContent>
          <DialogActions>
            <Button
              autoFocus
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                onSave();
              }}
              disabled={nameInput === ""}
            >
              {customization.common.saveButtonLabel}
            </Button>
            <Button
              className={classes.closeButton}
              onClick={handleCloseDialog}
              variant="outlined"
            >
              {customization.common.closeButtonLabel}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {renderDialog()}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.tableBorder}>
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{ root: classes.tableTitleCellStyle }}
                    align="center"
                  >
                    <Typography>
                      <b>{customization.accounts.tableTitle1}</b>
                    </Typography>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableTitleCellStyle }}
                    align="center"
                  >
                    <Typography>
                      <b>{customization.accounts.tableTitle2}</b>
                    </Typography>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableTitleCellStyle }}
                    align="center"
                  >
                    <b>{customization.accounts.tableTitle3}</b>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableTitleCellStyle }}
                    align="center"
                  >
                    <b>{customization.accounts.tableTitle4}</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accountsData.length > 0 ? (
                  accountsData.map((row) => (
                    <TableRow key={row.name} className={classes.tableBorder}>
                      <TableCell
                        component="th"
                        scope="row"
                        align="left"
                        classes={{ root: classes.tableCellPadding }}
                      >
                        {row.id}
                      </TableCell>
                      <TableCell
                        align="left"
                        width="150px"
                        classes={{ root: classes.tableCellPadding }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        width="150px"
                        classes={{ root: classes.tableCellPadding }}
                      >
                        {row.balance}
                      </TableCell>
                      <TableCell
                        align="left"
                        width="150px"
                        classes={{ root: classes.tableCellPadding }}
                      >
                        {row.number}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableCell
                    align="center"
                    classes={{ root: classes.tableCellPadding }}
                    colSpan={4}
                  >
                    NO DATA FOUND
                  </TableCell>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}></TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.tableCellPadding }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      className={classes.add}
                      onClick={() => handleOpenDialog("")}
                    >
                      <b> {customization.common.addButtonLabel}</b>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

AccountsPage.propTypes = {
  account: PropTypes.object,
  accountList: PropTypes.array,
  loading: PropTypes.string,
  error: PropTypes.object,
  accountAction: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    accountList: state.account.accountList,
    loading: state.account.loading,
    error: state.account.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    accountAction: bindActionCreators(accountActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountsPage);
