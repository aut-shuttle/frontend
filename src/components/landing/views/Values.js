import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function Values(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="https://i.imgur.com/6ThOnQa.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://i.imgur.com/Ykh3EnZ.png"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                A Faster Way To Top Up
              </Typography>
              <Typography variant="h2">
                {"Something"}
                {"."}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://i.imgur.com/CRTLLGN.png"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Live Updates
              </Typography>
              <Typography variant="h6">
                {"Crazy"}
                {""}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://i.imgur.com/YXGKiho.png"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Ticket History
              </Typography>
              <Typography variant="h5">
                {"Ok"}
                {"."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
  );
}

Values.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Values);
