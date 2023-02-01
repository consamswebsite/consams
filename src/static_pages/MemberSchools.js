import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import members from "../content/leadership/memberschools";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  members_container: {
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
});

const MemberSchools = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.members_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.leadership_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Current Member Schools</strong>
          </Typography>
          <Divider style={{ marginBottom: "30px " }} />

          {members.map((group) => (
            <>
              <Typography variant="h4" style={{ marginBottom: "15px" }}>
                <strong>{group.group}</strong>
              </Typography>
              <ul style={{ fontSize: "20px", lineHeight: "1.5em" }}>
                {group.schools.map((school) => (
                  <li key={school}>
                    <strong>{school}</strong>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MemberSchools;
