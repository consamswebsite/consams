import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import FadeInEffect from "./FadeInEffect";
import DonoGroup from "../core/DonoGroup";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: "#111111",
  },
  heroContent: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    backgroundImage: `url(/assets/images/background-489px.png)`,
    backgroundColor: "rgba(0, 0, 0, 1.2)",
    padding: theme.spacing(25, 0, 20),
    height: "calc(100vh - 110px)",
    minHeight: "600px",
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
  affiliates: {
    color: "black",
    paddingBottom: theme.spacing(4),
  },
}));
export default function HomeView() {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.heroContent}>
        <Container
          className={classes.titleImage}
          direction="column"
          alignitems="center"
          justifycontent="center"
          maxWidth="lg"
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            className={classes.title_shadow}
          >
            <strong>
              Consortium of New Sub-Sahara African Medical Schools
            </strong>
          </Typography>

          <Typography
            variant="h5"
            paragraph
            className={classes.subtitle_shadow}
          >
            <i style={{ color: "white" }}>
              New African Medical Schools Learning Together
            </i>
          </Typography>
          <DonoGroup />
        </Container>
      </div>
      <Box p={8} style={{ backgroundColor: "#6694d7" }}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <FadeInEffect>
            <Typography variant="h4" style={{ color: "#16306d" }}>
              <strong>Goals & Objectives</strong>
            </Typography>
          </FadeInEffect>
          <FadeInEffect>
            <Grid container style={{ color: "white" }}>
              <Grid item xs={6}>
                <List component="ol">
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "10rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>001.</strong>{" "}
                            To promote competency-based and other undergraduate
                            and postgraduate curricula, appropriate to the needs
                            and context of each participating country.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "8rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>002.</strong>{" "}
                            To promote faculty and trainee idea exchanges
                            between the participating medical schools and other
                            healthcare networks.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "4rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>003.</strong>{" "}
                            To promote south-south and north-south partnerships.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <List component="ol">
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "10rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>004.</strong>{" "}
                            To promote needs-based/translational-relevant
                            research.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "8rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>005.</strong>{" "}
                            To benchmark and support one another’s progress.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          type="h6"
                          style={{ height: "4rem", fontSize: "1.5rem" }}
                        >
                          <FadeInEffect>
                            <strong style={{ color: "#16306d" }}>006.</strong>{" "}
                            To advocate for improvement in governance and health
                            care in Africa.
                          </FadeInEffect>
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </FadeInEffect>
        </Container>
      </Box>
      <Box p={8} style={{ backgroundColor: "white" }}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <FadeInEffect>
            <Typography variant="h4" className={classes.affiliates}>
              <strong>Affiliated Organizations</strong>
            </Typography>
          </FadeInEffect>
          <FadeInEffect>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <FadeInEffect>
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
                </FadeInEffect>
              </Grid>
              <Grid item xs={4}>
                <FadeInEffect>
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
                </FadeInEffect>
              </Grid>
              <Grid item xs={4}>
                <FadeInEffect>
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
                </FadeInEffect>
              </Grid>
              <Grid item xs={4}>
                <FadeInEffect>
                  <a
                    href="https://www.vumc.org/global-health/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/affiliates/vumc.png" alt="VUMC" />
                  </a>
                </FadeInEffect>
              </Grid>
              <Grid item xs={4}>
                <FadeInEffect>
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
                </FadeInEffect>
              </Grid>
              <Grid item xs={4}>
                <FadeInEffect>
                  <a
                    href="https://www.fic.nih.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="assets/affiliates/fic.png" alt="FIC" />
                  </a>
                </FadeInEffect>
              </Grid>
            </Grid>
          </FadeInEffect>
        </Container>
      </Box>
    </main>
  );
}
