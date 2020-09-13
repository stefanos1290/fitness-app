import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      width: "60%",
      height: "400px",
      margin: "8px",
      margin: "auto",
      marginTop: "50px",
      marginBottom: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      justifyContent: "space-around",
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
      TextFieldContainer: {},
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
            <TextField id="name" label="Name" />
            <TextField id="surname" label="Surname" />
            <TextField id="email" label="Email" />
          </form>
          <h2>How can we help you?</h2>
          <TextField
            style={{ margin: 8 }}
            fullWidth
            id="outlined-basic"
            label="enter your question here..."
            variant="outlined"
          />
          <Button size="small" color="primary">
            SUBMIT
          </Button>
        </Paper>
      </div>
    </>
  );
};
export default Contact;
