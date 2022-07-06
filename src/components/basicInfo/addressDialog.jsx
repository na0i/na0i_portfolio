import React from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const AddressDialog = ({ isOpen, setIsOpen, address, setAddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setAddress(fullAddress);
    closeDialog();
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <Container isOpen={isOpen}>
          <CloseBtn onClick={closeDialog}>닫기</CloseBtn>
          <DaumPostcode onComplete={handleComplete} />
        </Container>
      ) : null}
    </>
  );
};

export default AddressDialog;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000000;
  width: 500px;
`;

const CloseBtn = styled.button`
  width: 100%;
  background-color: #cde6ff;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-weight: 700;
  font-size: var(--font-size-16);
  border-bottom: 2px solid #67b3ff;
  cursor: pointer;
`;
