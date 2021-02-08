import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';

//#00f, #f00

const useStyles = makeStyles({
    container: {
            // position: "absolute",
        },
        videoBg:{
            position: 'absolute',
            top: 0,
            left: 0,
            // width: '100%',
            height: '100%',
            objectFit: "contain"
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: "linear-gradient(#00f, #f00)",
            mixBlendMode: "overlay"
        },
        text: {
            position: 'absolute',
            zIndex: 10,
            transform: "translate(15%, 170%)",
            '& h2': {
                fontSize: '3em',
                fontWeight: 800,
                color: "#fff",
                lineHeight: '0.4em',
            }
        }
    });


        /* <Zoom right>
                <div className={classes.textContainer}>
                <span className={classes.text1}>FUEL YOUR BODY BEFORE,</span> 
                <span className={classes.text2}>DURING AND AFTER TRAINING</span>
                </div>
                </Zoom> */

const Welcome = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <video className={classes.videoBg} src="/videos/background.mp4" muted loop autoPlay />
            <div className={classes.text}>
            <h2>FUEL YOUR BODY BEFORE,</h2>
            <h2>DURING AND AFTER TRAINING</h2>
            </div>
            <div className={classes.overlay}></div>
        </div>
    )
}

export default Welcome