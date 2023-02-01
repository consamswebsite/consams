import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Faq from "react-faq-component";
import { faq as questions_and_answers } from "../content/aboutus/faq";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  faq_container: {
    display: "flex",
    flexDirection: "column",
  },
  faq_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
});

const FAQs = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.leadership_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.faq_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>FAQs</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          <Faq
            data={{
              rows: questions_and_answers,
            }}
            styles={{
              bgColor: "white",
              titleTextColor: "black",
              rowTitleColor: "black",
              rowContentColor: "black",
              rowTitleTextSize: "25px",
              rowContentPaddingBottom: "10px",
              rowContentTextSize: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default FAQs;
