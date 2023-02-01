import React from "react";
import { Link, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuDropdown from "./MenuDropdown";
import donationlink from "../content/donationlink";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 110,
    fontSize: "1.2rem",
  },
  menuButton: {
    fontSize: "1.1rem",

    textTransform: "none",
    borderRadius: "200px",
    padding: "5px 30px",
    backgroundColor: "#ffcc00",
    fontWeight: "bold",
  },
}));

const Menu = withRouter(function () {
  const classes = useStyles();
  return (
    <AppBar color="default" position="static">
      <Toolbar color="light" className={classes.toolbar}>
        <Link className={classes.title} to="/">
          <img src="/assets/images/logo.svg" alt="logo" width="225px" />
        </Link>
        <MenuDropdown
          title="About Us"
          options={[
            {
              name: "Our Story",
              link: "about",
            },
            {
              name: "Constitution",
              link: "constitution",
            },
            {
              name: "FAQs",
              link: "faq",
            },
          ]}
        />
        <MenuDropdown
          title="Leadership"
          options={[
            {
              name: "Executive",
              link: "leadership",
            },
            {
              name: "Affiliates",
              link: "affiliates",
            },
            {
              name: "Member Schools",
              link: "members",
            },
            {
              name: "Trustees",
              link: "trustees",
            },
          ]}
        />

        <Link
          to={"/memberships"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button
            style={{
              float: "left",
              flexGrow: "1",
              textTransform: "none",
              minWidth: "10vw",
              fontSize: "20px",
            }}
          >
            Memberships
          </Button>
        </Link>
        <MenuDropdown
          title="Conferences"
          options={[
            {
              name: "Upcoming Conferences",
              link: "upcomingconferences",
            },
            {
              name: "Previous Conferences",
              link: "previousconferences",
            },
          ]}
        />
        <MenuDropdown
          title="Media"
          options={[
            {
              name: "A Doctor Of My Own",
              link: "adoctorofmyown",
            },
            {
              name: "Articles",
              link: "articles",
            },
            {
              name: "Photos",
              link: "photos",
            },
          ]}
        />

        <span>
          <a
            href={donationlink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.menuButton} variant="contained">
              Donate
            </Button>
          </a>
        </span>
      </Toolbar>
    </AppBar>
  );
});

export default Menu;
