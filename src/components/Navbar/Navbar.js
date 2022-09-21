import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
  } from "mdbreact";
  
function Navbar() {
    return (
      <MDBNavbar
        color="special-color-dark"
        dark
        expand="md"
        style={{ width: "100%" }}
      >
        <MDBNavbarBrand>
          <strong className="white-text">Dongyu Guo</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/about">
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/portfolio">
              Projects
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/resume">
              Resume
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="/contact">
              Contact
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
  
  export default Navbar;
  