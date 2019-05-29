import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#FFEB3B"
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.piel,
    marginRight: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150
  }
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.icons}>
                <a href="https://facebook.com/" className={classes.icon}>
                  <img
                    src="https://i.imgur.com/fdKCY4w.png"
                    height="35"
                    alt="Facebook"
                  />
                </a>
                <a href="https://instagram.com" className={classes.icon}>
                  <img
                    src="https://i.imgur.com/EbMsW2z.png"
                    height="35"
                    alt="Twitter"
                  />
                </a>
                <a href="https://twitter.com" className={classes.icon}>
                  <img
                    src="https://i.imgur.com/JJA7QQG.png"
                    height="35"
                    alt="Twitter"
                  />
                </a>
              </Grid>
              <Grid item>© 2019 AUT University</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Terms and Conditions
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy">Privacy</Link>
              </li>
            </ul>
          </Grid>

          <Grid item>
            <Typography variant="caption">Version 1.0</Typography>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  pure,
  withStyles(styles)
)(AppFooter);
