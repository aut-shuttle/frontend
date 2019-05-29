import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../components/LayoutBody";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, blue, green, yellow } from '@material-ui/core/colors'
import MenuIcon from '@material-ui/icons/Menu'
import DesktopMac from '@material-ui/icons/DesktopMac'
import Checkbox from '@material-ui/icons/CheckBox'
import Money from '@material-ui/icons/Money'

const yellowTheme = createMuiTheme({ palette: { primary: yellow } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "theme.palette.secondary.light",
    overflow: "hidden"
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  title: {
    marginBottom: theme.spacing.unit * 14
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: "#fdd835",
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing.unit * 8
  },
  largeIcon: {
    width: 150,
    height: 100,
  },
});

function HowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="https://i.imgur.com/6ThOnQa.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
     
        <Typography
          variant="h4"
          className={classes.title}
          component="h2"
        >
          How Does It Work?
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <DesktopMac
                fontSize="large"
                />
                <Typography variant="h5" align="center">
                  Register with your AUT Student Email Address
                </Typography>
              </div>
              
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <Checkbox
                fontSize="large"
                />
                <Typography variant="h5" align="center">
                  Confirm Your Student Details Are Correct
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <Money
                fontSize="large"
                />
                <Typography variant="h5" align="center">
                  {"Start Topping Up Your Account"}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <MuiThemeProvider theme={blueTheme}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link
              {...linkProps}
              href="/premium-themes/onepirate/sign-up"
              variant="button"
            />
          )}
        >
          Register Now
        </Button>
        </MuiThemeProvider>
      </LayoutBody>
    </section>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HowItWorks);
