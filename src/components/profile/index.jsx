import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileImage from "./modules/profileImage";
import ProfileLink from "./modules/profileLink";
import { userStore } from "src/stores/userStore";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState();

  useEffect(() => {
    async function fetchProfileData() {
      const response = await userStore.getProfileInfo();
      setProfileInfo({ ...response });
    }
    fetchProfileData();
  }, []);

  return (
    <Container>
      {profileInfo ? (
        <>
          <ProfileImage
            profileImgUrl={profileInfo.profileImg}
            topIntroduction={profileInfo.topIntroduction}
            bottomIntroduction={profileInfo.bottomIntroduction}
          />
          <ProfileLink
            githubLink={profileInfo.githubLink}
            notionLink={profileInfo.notionLink}
            blogLink={profileInfo.blogLink}
            instagramLink={profileInfo.instagramLink}
          />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;
