import React from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import articles from "../content/media/articles";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  articles_container: {
    display: "flex",
    flexDirection: "column",
  },
  articles_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
  articleLink: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    fontSize: "1.4rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  subHeader: {
    fontSize: "1rem",
    color: "grey",
    marginBottom: "15px",
  },
});

const Articles = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.articles_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.articles_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Articles</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          {articles.map((img, index) => (
            <div id={index}>
              <Link
                to={`/assets/articles/${img.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.articleLink}
              >
                {img.title ? img.title : img.file.split(".pdf")[0]}
              </Link>
              <Typography variant="body1" className={classes.subHeader}>
                {`${img?.date || ""}${img.date && img.author ? " | " : ""}${
                  img?.author || ""
                }`}
              </Typography>

              <Typography variant="body1" style={{ marginBottom: "15px" }}>
                {img.description}
              </Typography>
              <Divider style={{ marginBottom: "15px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Articles;
