import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
    return (
      <HashRouter basename="/">
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </HashRouter>
    );
  }
export default App;