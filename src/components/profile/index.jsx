import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <ImgWrapper></ImgWrapper>
      <ImgInput type="file" accept="image/*" />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100%;
`;

const ImgInput = styled.input`
  display: none;
`;
