import React from "react";
import styled from "styled-components";
import ProgressBar from "src/components/progressBar";
import Profile from "src/components/profile";
import BasicInfo from "src/components/basicInfo";

const Main = () => {
  return (
    <Container>
      <ProgressBar />
      <Profile />
      <div className="justify-between">
        <BasicInfo />
        <BasicInfo />
        <BasicInfo />
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  font-family: "LeferiPointWhite";
  transform: skew(-0.02deg);
  padding: 20px;
  min-width: 930px;
`;
