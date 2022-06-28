import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubIcon } from "src/assets/icon/profileLink-github.svg";
import { ReactComponent as NotionIcon } from "src/assets/icon/profileLink-notion.svg";
import { ReactComponent as BlogIcon } from "src/assets/icon/profileLink-blog.svg";
import { ReactComponent as InstagramIcon } from "src/assets/icon/profileLink-instagram.svg";

const ProfileLink = () => {
  return (
    <Container>
      <GithubIcon />
      <NotionIcon />
      <BlogIcon />
      <InstagramIcon />
    </Container>
  );
};

export default ProfileLink;

const Container = styled.div``;
