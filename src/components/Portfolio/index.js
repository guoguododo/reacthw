import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              Wheather Dashboard for different cities
            </MDBCardText>
            <MDBBtn
              href="https://github.com/guoguododo/weather"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardBody>
            <MDBCardTitle tag="h5">Drinkers-United</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to search coctail receipt and nearest beweries
            </MDBCardText>
            <MDBBtn
              href="https://github.com/k3vbot/Drinkers-United"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
    
          <MDBCardBody>
            <MDBCardTitle tag="h5">Doctor Log</MDBCardTitle>
            <MDBCardText>
             A log system for doctor to sign in and add patient records
            </MDBCardText>
            <MDBBtn
              href="https://github.com/guoguododo/doctorlog"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;