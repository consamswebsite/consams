import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import memberships from "../content/memberships/memberships";
import TopPhoto from "../core/TopPhoto";
import donationlink from "../content/donationlink";

const useStyles = makeStyles((theme) => ({
  leadership_container: {
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: "#3f4771",
  },
  leadership_content: {
    paddingLeft: "150px",
    paddingRight: "150px",
    paddingTop: "100px",
    paddingBottom: "100px",
    boxShadow: "0px -5px 10px grey",
  },
}));

const MembershipFee = withRouter(function () {
  const classes = useStyles();
  return (
    <>
      <div className={classes.leadership_container}>
        <TopPhoto />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <div className={classes.leadership_content}>
          <Typography variant="h3" style={{ marginBottom: "15px" }}>
            <strong>Annual Memberships</strong>
          </Typography>

          <Divider style={{ marginBottom: "30px " }} />
          <Box p={8} style={{ backgroundColor: "white" }}>
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={5}>
                {memberships.map((membership) => (
                  <Grid item xs={4}>
                    <div
                      style={{
                        border: "1px solid #3f4771",
                        borderRadius: "10px",
                        padding: "20px",
                        minHeight: "500px",
                        position: "relative",
                      }}
                    >
                      <Typography variant="h4" style={{ marginBottom: "15px" }}>
                        <strong>{membership.title}</strong>
                      </Typography>
                      <Typography variant="h2" style={{ marginBottom: "15px" }}>
                        <strong>${membership.price}</strong>
                      </Typography>
                      <Typography variant="h5" style={{ marginBottom: "15px" }}>
                        <strong>Annual Membership</strong>
                      </Typography>

                      <Typography
                        variant="h5"
                        style={{ marginBottom: "15px", color: "#666" }}
                      >
                        {membership.description}
                      </Typography>
                      <a
                        href={donationlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          position: "absolute",
                          bottom: "0px",
                          marginTop: "15px",
                          left: "0",
                          right: "0",
                          margin: "20px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={["fas", "shopping-cart"]}
                          style={{ marginRight: "10px" }}
                        />
                        <strong>Become A Member</strong>
                      </Button>
                    </a>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </>
  );
});

export default MembershipFee;
