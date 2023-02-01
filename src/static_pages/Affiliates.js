import React from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles((theme) => ({
  affiliates_container: {
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
  affiliates_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
}));

const Affiliates = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.affiliates_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.affiliates_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Affiliate Organizations</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />
          <Box p={8} style={{ backgroundColor: "white" }}>
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <a
                    href="https://www.aasciences.africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/affiliates/aas.png"
                      alt="AAS"
                      style={{ backgroundColor: "black", padding: "20px" }}
                    />
                  </a>
                </Grid>
                <Grid item xs={4}>
                  <a
                    href="https://www.cugh.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/affiliates/cugh.png"
                      alt="CUGH"
                      style={{ padding: "20px" }}
                    />
                  </a>
                </Grid>
                <Grid item xs={4}>
                  <a
                    href="https://www.faimer.org/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/affiliates/faimer.png"
                      alt="Faimer"
                      style={{ padding: "20px" }}
                    />
                  </a>
                </Grid>
                <Grid item xs={4}>
                  <a
                    href="https://www.vumc.org/global-health/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/affiliates/vumc.png" alt="VUMC" />
                  </a>
                </Grid>
                <Grid item xs={4}>
                  <a
                    href="https://www.afrehealth.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/affiliates/afrehealth.png"
                      alt="Afrehealth"
                    />
                  </a>
                </Grid>
                <Grid item xs={4}>
                  <a
                    href="https://www.fic.nih.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/affiliates/fic.png" alt="FIC" />
                  </a>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
});

export default Affiliates;
