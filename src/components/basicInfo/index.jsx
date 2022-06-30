import React from "react";
import styled from "styled-components";
import SectionTitle from "../title/sectionTitle";

const BasicInfo = () => {
  return (
    <>
      <SectionTitle text={"개인 정보"} />
      <BirthdayInput></BirthdayInput>
      <AddressInput></AddressInput>
      <EmailInput></EmailInput>
      <ContactInput></ContactInput>
    </>
  );
};

export default BasicInfo;
const BirthdayInput = styled.input``;
const AddressInput = styled.input``;
const EmailInput = styled.input``;
const ContactInput = styled.input``;
