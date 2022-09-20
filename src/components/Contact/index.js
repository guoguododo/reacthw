import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-secondary" />
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-secondary w-25" />
          <a href="tel:510-284-9448">
            <MDBIcon icon="phone-alt" /> 510-284-9448
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-secondary w-25" />
          <a href="mailto:guoguody@hotmail.com">
            <MDBIcon icon="envelope" /> guoguody@hotmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;