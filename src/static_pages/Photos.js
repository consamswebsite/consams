import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import photos from "../content/media/photos";
import { ImageList, ImageListItem } from "@material-ui/core";
import TopPhoto from "../core/TopPhoto";

const useStyles = makeStyles({
  photos_container: {
    display: "flex",
    flexDirection: "column",
  },
  photos_content: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
});

const Photos = withRouter(function () {
  const classes = useStyles();
  return (
    <div className={classes.photos_container}>
      <TopPhoto />
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.photos_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Photos</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />

          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={370}>
            {photos.map((item, index) => (
              <ImageListItem key={item}>
                <img
                  key={item}
                  src={`assets/photos/${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`assets/photos/${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title || index}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
});

export default Photos;
