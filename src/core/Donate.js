import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import DonoGroup from "./DonoGroup";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
}));

const Donate = withRouter(function () {
  const classes = useStyles();

  return (
    <>
      <Box p={8} style={{ backgroundColor: "#00b39b" }}>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Card>
            <CardHeader
              title={
                <Typography variant="h4">Help Support our Cause</Typography>
              }
              subheader={
                <Typography variant="p" style={{ color: "#888888" }}>
                  Support Us and Change the Course of Someone's Life Today!
                </Typography>
              }
            ></CardHeader>
            <CardContent>
              <DonoGroup />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
});
export default Donate;
