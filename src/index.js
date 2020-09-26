import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import "./page styles/index.scss";

import Stories from "./Stories";
import Features from "./Features";
import Pricing from "./Pricing";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Route path='/' exact component={App} />
      <Route path='/stories' exact component={Stories} />
      <Route path='/features' exact component={Features} />
      <Route path='/pricing' exact component={Pricing} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
