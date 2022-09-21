import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import Resume from "./routes/Resumedownload";

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