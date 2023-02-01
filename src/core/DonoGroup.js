import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import donationlink from "../content/donationlink";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: "#111111",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
  titleImage: {
    textAlign: "center",
    color: "white",
  },
  featuredNewsTitle: {
    color: "black",
    paddingBottom: theme.spacing(4),
  },
  featuresTitle: {
    margin: theme.spacing(2, 0),
    backgroundColor: "#CBC3E3",
  },
  payPalButton: {
    textTransform: "none",
    backgroundColor: "#ffcc00",
    fontSize: "1rem",
  },
}));

const DonoGroup = function () {
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <a
          href={donationlink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button className={classes.payPalButton} variant="contained">
            <FontAwesomeIcon icon={faPaypal} style={{ marginRight: "5px" }} />
            <strong>{"Donate with PayPal"}</strong>
          </Button>
        </a>
      </Grid>
      <Grid item>
        <Link to={"/memberships"} style={{ textDecoration: "none" }}>
          <Button
            style={{
              color: "white",
              backgroundColor: "#6694d7",
              fontSize: "1rem",
              textTransform: "none",
            }}
            variant="contained"
          >
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              style={{ marginRight: "5px" }}
            />
            <strong>{"Become a Member"}</strong>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
export default DonoGroup;
