import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ExecDescriptions from "../content/leadership/leadership";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  leadership_container: {
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
  grid_container: {
    margin: "50px 30px",
    padding: "20px 20px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: "20px",
    borderColor: "#97B6E4",
    borderWidth: "2px",
    borderStyle: "solid",
    boxShadow: "5px 5px 5px grey",
  },
  headshot_container: {
    height: "250px",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingRight: "20px",
  },
  content_container: {
    flex: "5",
    display: "flex",
    flexDirection: "column",
  },
});

const Leadership = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.leadership_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.leadership_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Executive Committee</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          {ExecDescriptions.map(({ name, title, degree, des, headshot }) => (
            <div className={classes.grid_container}>
              <div
                style={{
                  position: "relative",
                  flex: "2",
                  minWidth: "300px",
                  minHeight: "300px",
                }}
              >
                <img
                  src={`assets/exec_headshots/${headshot}`}
                  className={classes.headshot_container}
                  alt={`${name} headshot`}
                />
              </div>

              <div className={classes.content_container}>
                <Typography variant="h6" style={{ marginTop: "10px" }}>
                  <strong>{title}</strong>
                </Typography>
                <Typography variant="h4">
                  <strong>{name}</strong>
                </Typography>
                <Typography variant="h6">
                  <i>{degree}</i>
                </Typography>
                <br />
                <p style={{ fontSize: "15px", whiteSpace: "pre-line" }}>
                  {des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Leadership;
