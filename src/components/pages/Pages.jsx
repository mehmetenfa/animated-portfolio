import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../common/Footer";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/portfolio" Component={Portfolio} />
          <Route exact path="/testimonials" Component={Testimonials} />
          <Route exact path="/blog" Component={Blog} />
          <Route exact path="/contact" Component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
