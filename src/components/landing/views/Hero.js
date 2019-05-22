import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroLayout from "./HeroLayout";
import Grid from '@material-ui/core/Grid';

const backgroundImage =
  "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-1.2.1&w=1000&q=80";

const styles = theme => ({
  
  root: {
    display: "flex",
  },
  
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 20,
    margin: theme.spacing.unit,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10
    }
  },
  more: {
    marginTop: theme.spacing.unit * 2
  },
  logo:{
   padding: 500,
  },
  group: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
}

});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} className={classes.logo} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2">
        
      </Typography>
      <Typography color="inherit" align="center" variant="h2">
        An easier way to get around campus
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Sign up or Login Below
      </Typography>
      
      <Grid container spacing={24}
        direction="row"
        alignItems="center"
        justify="center"
        >
      <Grid item xs={2}
        >
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.group}
        component={linkProps => (
          <Link
            {...linkProps}
            href="/register"
            variant="button"
          />
        )}
      >
        <Typography align="center" color="inherit">Register</Typography>
      </Button>
      </Grid>
      <Grid item xs={2}>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.group}
        component={linkProps => (
          <Link
            {...linkProps}
            href="/login"
            variant="button"
          />
        )}
      >
        <Typography align="center" color="inherit">Login</Typography>
      </Button>
      </Grid>
      </Grid>

    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
