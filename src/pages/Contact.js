import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      width: "70%",
      height: "456px",
      margin: "8px",
      margin: "auto",
      marginTop: "50px",
      marginBottom: "50px",
    },
    paper: {
      width: "500px",
      height: "500px",
    },
    form: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    bigInput: {
      width: "60%",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <h2>Please enter:</h2>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" variant="outlined" />
            <TextField id="filled-basic" label="Surname" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </form>
          <h2>How can we help you?</h2>
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.bigInput}
          />
        </Paper>
      </div>
    </>
  );
};
export default Contact;
