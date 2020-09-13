import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "60%",
      height: "400px",
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
          <Typography>Please enter:</Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField style={{ marginRight: "15px" }} id="name" label="Name" />
            <TextField id="surname" label="Surname" />
            <TextField
              style={{ marginLeft: "15px" }}
              id="email"
              label="Email"
            />
          </form>
          <Typography>How can we help you?</Typography>
          <TextField
            style={{ margin: 8 }}
            fullWidth
            id="outlined-basic"
            label="Enter your question(s) here..."
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
