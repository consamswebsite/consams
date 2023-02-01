import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography, Divider } from "@material-ui/core";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles((theme) => ({
  media_container: {
    display: "flex",
    flexDirection: "column",
  },
  aboutus_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "60px",
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
}));

const ADoctorOfMyOwn = withRouter(function () {
  const classes = useStyles();

  return (
    <div className={classes.media_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.aboutus_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>A Doctor of My Own</strong>
          </Typography>

          <Divider />

          <Typography variant="h6" style={{ marginTop: "20px" }}>
            A Doctor of My Own, director by Trisha Pasricha as a Vanderbilt
            University medical study under supervision of her mentor Dr Quentin
            Eichbaum (a native of Namibia), explores the emerging stories of
            students at the newly-opened University of Namibia School of
            Medicine in Windhoek. Fresh out of organic chemistry, the students
            will trek to rural villages, training with patients who have never
            before met a doctor from their own country. The challenges are
            enormous–and so is the pressure. Some students will leave in the
            brain drain, never to return. Yet buried in the sea of endless
            patients and faced with unexpected responsibilities, a few may rise
            to find their calling. And if they do, medical education will
            revolutionize healthcare in Africa.
          </Typography>

          <br />

          <Typography variant="h6">
            The documentary features interviews from key leaders in global
            health and medical education including: Dr. Julio Frenk (former Dean
            of Harvard School of Public Health), Dr. Quentin Eichbaum (Professor
            and Program Director, Vanderbilt University School of Medicine), and
            Dr. Philip Odonkor (former deputy dean, University of Namibia School
            of Medicine). Through interviews of students, allied health workers,
            and leaders in the field, the film captures first-hand accounts of
            the day-to-day battles of healthcare delivery and training new
            physicians in the country.
          </Typography>
        </div>
      </div>
      <Box
        p={8}
        style={{ backgroundColor: "white" }}
        className={classes.aboutus_content}
      >
        <Container className={classes.cardGrid} maxWidth="lg">
          <iframe
            allowfullscreen
            style={{ width: "100%", height: "700px" }}
            frameborder="0"
            title="A Doctor of My Own"
            src="https://player.vimeo.com/video/97321059?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
          ></iframe>
        </Container>
      </Box>
    </div>
  );
});

export default ADoctorOfMyOwn;
