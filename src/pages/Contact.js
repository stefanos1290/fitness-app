import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/images/berlin.jpeg)",
    // background: 'linear-gradient(#607d8b, brown)',
    width: '100%',
    height: '100%',
    position: "absolute"
  },
  contact: {
    position: 'relative',
    minHeight: "100vh",
    padding: "20px 100px 0px 100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
    content: {
      maxWidth: "800px",
      textAlign: "center"
    },
    infoContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
      // background: '#607d8b'
      position: "relative"
    },
    infoContainerOverlay: {
      position: "absolute",
      width: "90%",
      height: "100%",
      background: '#607d8b',
      opacity: ".5",
      border: "2px solid white"
    },
      contactInfo: {
        width: "50%",
        display: "flex",
        flexDirection: "column"
    },
    box: {
      position: "relative",
      padding: '20px 0',
      display: "flex"
    },
    icon: {
      minWidth: "60px",
      height: "60px",
      background: '#fff',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      fontSize: "22px",
      marginLeft: "10px"
    },
    text: {
      display: "flex",
      marginLeft: "20px",
      fontSize: "20px",
      color: '#fff',
      flexDirection: "column",
      fontWeight: 300,
      lineHeight: '0.4em'
    },
    contactForm: {
      width: "40%",
      position: 'relative',
      zIndex: 2,
      background: "#fff",
      height: '428px'
    },
    h: {
      fontSize: "30px",
      color: 'gray',
      fontWeight: "500",
      marginLeft: '10px'
    },
    inputBox: {
      position: 'relative',
      width: "90%",
      marginTop: "10px"
    },
    input: {
      width: "90%",
      padding: "5px 0",
      fontSize: "16px",
      margin: "10px 0",
      marginLeft: '10px',
      // color: 'black'
    },
    inputButton: {
      width: "40%",
      padding: "5px 0",
      fontSize: "16px",
      margin: "10px 0",
      marginLeft: '10px'
    }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <section className={classes.contact}>
          <div className={classes.content}>
          <h2 style={{color:"#fff"}}>Contact Us</h2>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.infoContainerOverlay}></div>
            <div className={classes.contactInfo}>
              <div className={classes.box}>
                <div className={classes.icon}><LocationOnIcon /></div>
                <div className={classes.text}>
                  <h3>Location</h3>
                  <p>Berlin</p>
                </div>
              </div>
              <div className={classes.box}>
                <div className={classes.icon}><EmailIcon /></div>
                <div className={classes.text}>
                  <h3>Email</h3>
                  <p>stefanostrr@hotmail.com</p>
                </div>
              </div>
              <div className={classes.box}>
                <div className={classes.icon}><PhoneIcon /></div>
                <div className={classes.text}>
                  <h3>Phone</h3>
                  <p>+491732083699</p>
                </div>
                </div>
              </div>
              <div className={classes.contactForm}>
                <form>
                  <h2 className={classes.h}>Send Message</h2>
                  <div className={classes.inputBox}>
                    <TextField inputProps={{ style: {color: '#607d8b'}}} className={classes.input} type="text" name='' label="Full Name" required />
                  </div>
                  <div className={classes.inputBox}>
                    <TextField inputProps={{ style: {color: '#607d8b'}}} className={classes.input} type="text" name='' label="Email" required />
                  </div>
                  <div className={classes.inputBox}>
                    <TextField inputProps={{ style: {color: '#607d8b'}}} style={{width: "100%", marginLeft: '10px'}} variant="outlined" type="text" name='' label="Type your message..." required />
                  </div>
                  <div className={classes.inputBox}>
                    <Button variant="contained" color="primary" className={classes.inputButton} type="submit" name="" value="Send">Send</Button>
                  </div>
                </form>
              </div>
            </div>
        </section>
      </div>
    </>
  );
};
export default Contact;


// root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   "& > *": {
  //     width: "60%",
  //     height: "400px",
  //     margin: "auto",
  //     marginTop: "50px",
  //     marginBottom: "50px",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     padding: "20px",
  //     justifyContent: "space-around",
  //   },
  //   paper: {
  //     width: "500px",
  //     height: "500px",
  //   },
  //   form: {
  //     "& > *": {
  //       margin: theme.spacing(1),
  //       width: "25ch",
  //     },
  //     TextFieldContainer: {},
  //   },
  // },
















  // '& $content': {
  //   maxWidth: "800px",
  //   textAlign: "center"
  // },
  // '& $content h2': {
  //   fontSize: "36px",
  //   fontWeight: "500",
  //   color: "#fff"
  // },
  // '& $content p': {
  //   fontWeight: "300",
  //   color: "#fff"
  // }   