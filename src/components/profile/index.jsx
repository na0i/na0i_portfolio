import React from "react";
import styled from "styled-components";
import ProfileImage from "./modules/profileImage";
import ProfileIntroduction from "./modules/profileIntroduction";
import ProfileLink from "./modules/profileLink";

const Profile = () => {
  return (
    <Container>
      <ProfileImage />
      <ProfileIntroduction />
      <ProfileLink />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
`;
