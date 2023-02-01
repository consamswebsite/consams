import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Donate from "../core/Donate";

const useStyles = makeStyles(() => ({
  copyright: {
    backgroundColor: "#3f4771",
    color: "#FFFFFF",
    padding: "10px",
    textAlign: "center",
  },
}));

const Footer = withRouter(function () {
  const classes = useStyles();

  return (
    <>
      <Donate />
      <div className={classes.copyright}>
        <Typography variant="caption" style={{ marginLeft: "30px" }}>
          © {new Date().getFullYear()} CONSAMS. All Rights Reserved.
        </Typography>
      </div>
    </>
  );
});

export default Footer;
