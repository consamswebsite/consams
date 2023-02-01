import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  constitution_container: {
    display: "flex",
    flexDirection: "column",
  },
  leadership_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
  content_container: {
    flex: "5",
    display: "flex",
    flexDirection: "column",
  },
});

const Constitution = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.constitution_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.leadership_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Constitution</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          <iframe
            title="Constitution"
            src="/assets/constitution/constitution.pdf"
            style={{ width: "100%", height: "1000px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
});

export default Constitution;
