import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Footer from "./core/Footer";
import AboutUs from "./static_pages/AboutUs";
import Leadership from "./static_pages/Leadership";
import Affiliates from "./static_pages/Affiliates";
import FAQs from "./static_pages/FAQs";
import UpcomingConferences from "./static_pages/UpcomingConferences";
import PreviousConferences from "./static_pages/PreviousConferences";
import Constitution from "./static_pages/Constitution";
import MembershipFee from "./membership/MembershipFee";
import MemberSchools from "./static_pages/MemberSchools";
import { makeStyles } from "@material-ui/core/styles";
import ADoctorOfMyOwn from "./static_pages/ADoctorOfMyOwn";
import Trustees from "./static_pages/Trustees";
import Articles from "./static_pages/Articles";
import Photos from "./static_pages/Photos";

const useStyles = makeStyles(() => ({
  pageContainer: {
    position: "relative",
    minHeight: "100vh",
  },

  contentWrap: {
    minHeight: "calc(100vh - 278px)",
  },
}));

const MainRouter = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentWrap}>
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/faq" component={FAQs} />
          <Route path="/upcomingconferences" component={UpcomingConferences} />
          <Route path="/previousconferences" component={PreviousConferences} />
          <Route path="/trustees" component={Trustees} />
          <Route path="/constitution" component={Constitution} />
          <Route path="/members" component={MemberSchools} />
          <Route path="/leadership" component={Leadership} />
          <Route path="/affiliates" component={Affiliates} />
          <Route path="/memberships" component={MembershipFee} />
          <Route path="/adoctorofmyown" component={ADoctorOfMyOwn} />
          <Route path="/articles" component={Articles} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default MainRouter;
