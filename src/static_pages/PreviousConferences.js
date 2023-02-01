import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import meeting_info from "../content/conferences/previousconferences";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  prev_conferences_container: {
    display: "flex",
    flexDirection: "column",
  },
  prev_conferences_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
});

const PreviousConferences = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.prev_conferences_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.prev_conferences_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Previous Conferences</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          {meeting_info.map((item, index) => (
            <div key={index}>
              <Typography variant="h6">
                <strong>{item.title}</strong>
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "15px" }}>
                {item.description}
              </Typography>

              <Divider style={{ marginBottom: "30px " }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PreviousConferences;
