import React, { useState } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";

const AddressDialog = () => {
  const [address, setAddress] = useState(null);
  const handleAddress = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode);
  };

  return (
    <Container>
      <DaumPostCode />
    </Container>
  );
};

export default AddressDialog;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 10px;
`;
