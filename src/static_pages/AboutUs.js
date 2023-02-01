import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Container, Typography, Divider } from "@material-ui/core";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles((theme) => ({
  aboutus_container: {
    display: "flex",
    flexDirection: "column",
  },
  aboutus_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "60px",
    paddingBottom: "100px",
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
}));

const AboutUs = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.aboutus_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.aboutus_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>About CONSAMS</strong>
          </Typography>

          <Divider />

          <Typography
            variant="h5"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <strong>
              Founded 2011 : Five Southern African Medical schools;
              <br />
              Expanded 2015 & 2022 : Include Sub-Sahara African Medical Schools.
            </strong>
          </Typography>

          <Typography variant="h6">
            CONSAMS - The “Consortium of New Sub-Sahara African Medical Schools”
            - was founded in 2011 under the original name of the “Consortium of
            New Southern African Medical Schools.” At an ensuing Annual General
            Meeting, it was decided to expand the organization to include
            members across the African continent and beyond southern Africa -
            hence the name change from “Southern African” to Sub-Sahara African.
          </Typography>

          <br />

          <Typography variant="h6">
            Today CONSAMS is rapidly expanding across Africa to include new
            medical schools that are within about 10-15 years of graduating
            their first class of medical students.
          </Typography>
        </div>
      </div>
      <Box
        p={8}
        style={{ backgroundColor: "white" }}
        className={classes.aboutus_content}
      >
        <Typography variant="h3" style={{ marginBottom: "15px" }}>
          <strong>The Founding Members of CONSAMS</strong>
        </Typography>
        <Divider />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <a
                href="https://www.cbu.ac.zm/schoolsAndUnits/schoolofmedicine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/copperbelt.png"}
                  alt="Logo 1"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://www.nul.ls/health/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/lesotho.png"}
                  alt="Logo 2"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://www.utu.fi/en/university/faculty-of-medicine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/turku.png"}
                  alt="Logo 3"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://www.unam.edu.na/faculty-of-health-sciences#SoM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/unam.png"}
                  alt="Logo 3"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://cidma.eu/lurio-university/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/unidelurio.png"}
                  alt="Logo 3"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                href="https://medschool.vanderbilt.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="250px"
                  src={"/assets/founding_members/vusm.png"}
                  alt="Logo 3"
                  style={{ padding: "20px" }}
                />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
});

export default AboutUs;
