import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ProfileEntrepreneurPage from "../ProfileEntrepreneurPage";
import FeedPage from "../FeedPage";
import LiveStreamPage from "../LiveStreamPage";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";


export const routes = {
  root: "/",
  login: "/login",
  signuppage: "/signup",
  feedpage: "/feed",
  profileentrepreneurpage: "/profile-entrepreneur",
  livestream: "/livestream",
  about: "/about",
  errorpage: "/maintenance",
  contactpage: "/about/contact"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signuppage} component={SignUpPage} />
        <Route exact path={routes.profileentrepreneurpage} component={ProfileEntrepreneurPage} />
        <Route exact path={routes.feedpage} component={FeedPage} />
        <Route exact path={routes.livestream} component={LiveStreamPage} />
        <Route exact path={routes.about} component={AboutPage} />
        <Route exact path={routes.errorpage} component={ErrorPage} />
        <Route exact path={routes.contactpage} component={ContactPage} />
      
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
