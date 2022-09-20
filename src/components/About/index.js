import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <p style={{ fontSize: "27px" }}>
          I graduated from UC Berkeley in 2011 in Statistics. I find my passion 
          in Catastrophe modeling, then I join RMS and work there for the 
          next 11 years. During my work in RMS, I have various roles from Risk 
          analyst to a solution consultsnt then to model quality under develpment 
          team. My current role is working model validation and build test automation 
          tools with the software team to impliment analytical engine of our 
          newly released model product and cloud service product.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;