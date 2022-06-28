import React from "react";
import styled from "styled-components";
import ProfileImage from "./modules/profileImage";
import ProfileIntroduction from "./modules/profileIntroduction";

const Profile = () => {
  return (
    <Container>
      <ProfileImage />
      <ProfileIntroduction />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
`;
