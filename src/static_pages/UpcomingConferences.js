import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import meeting_info from "../content/conferences/upcomingconferences";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  upcoming_container: {
    display: "flex",
    flexDirection: "column",
  },
  upcoming_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
});

const UpcomingConferences = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.upcoming_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.upcoming_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Upcoming Conferences</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          {meeting_info.length ? (
            meeting_info.map((item, index) => (
              <div key={index}>
                <Typography variant="h6">
                  <strong>{item.title}</strong>
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "15px" }}>
                  {item.description}
                </Typography>

                <Divider style={{ marginBottom: "30px " }} />
              </div>
            ))
          ) : (
            <Typography variant="h6">
              <strong>No Events Upcoming.</strong>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
});

export default UpcomingConferences;
