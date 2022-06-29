import React, { useRef, useState } from "react";
import styled from "styled-components";

import { ReactComponent as CheckIcon } from "src/assets/icon/check.svg";
import { ReactComponent as GithubIcon } from "src/assets/icon/profileLink-github.svg";
import { ReactComponent as NotionIcon } from "src/assets/icon/profileLink-notion.svg";
import { ReactComponent as BlogIcon } from "src/assets/icon/profileLink-blog.svg";
import { ReactComponent as InstagramIcon } from "src/assets/icon/profileLink-instagram.svg";
import { userStore } from "src/stores/userStore";

const ProfileLink = ({ githubLink, notionLink, blogLink, instagramLink }) => {
  const inputRef = useRef();
  const [githubLinkTemp, setGithubLinkTemp] = useState(githubLink);
  const [notionLinkTemp, setNotionLinkTemp] = useState(notionLink);
  const [blogLinkTemp, setBlogLinkTemp] = useState(blogLink);
  const [instagramLinkTemp, setInstagramLinkTemp] = useState(instagramLink);
  const [isCheckActivate, setIsCheckActivate] = useState(false);
  const [iconName, setIconName] = useState();
  const [linkTemp, setLinkTemp] = useState();
  const [isInputOpen, setIsInputOpen] = useState(false);
  console.log(githubLink, githubLinkTemp);

  const onOpenLinkInput = (name) => {
    setIconName(name);
    setIsInputOpen(true);
  };

  const onUpdateLinkTemp = (e) => {
    setLinkTemp(e.target.value);
    setIsCheckActivate(true);
    if (e.target.value === "") {
      setIsCheckActivate(false);
    }
  };

  const onUpdateLink = (name) => {
    if (name === "Github") {
      setGithubLinkTemp(linkTemp);
      userStore.onUpdateGithubLink(linkTemp);
    } else if (name === "Notion") {
      setNotionLinkTemp(linkTemp);
      userStore.onUpdateNotionLink(linkTemp);
    } else if (name === "Blog") {
      setBlogLinkTemp(linkTemp);
      userStore.onUpdateBlogLink(linkTemp);
    } else if (name === "Instagram") {
      setInstagramLinkTemp(linkTemp);
      userStore.onUpdateInstagramLink(linkTemp);
    }
    setLinkTemp(null);
    setIsCheckActivate(false);
    setIsInputOpen(false);
    inputRef.current.value = null;
  };

  return (
    <Container>
      <Icons>
        <GithubIcon
          width="22px"
          height="22px"
          onClick={() => onOpenLinkInput("Github")}
          fill={githubLinkTemp ? "black" : "#E3E3E3"}
        />
        <NotionIcon
          width="22px"
          height="22px"
          onClick={() => onOpenLinkInput("Notion")}
          fill={notionLinkTemp ? "black" : "#E3E3E3"}
        />
        <BlogIcon
          width="22px"
          height="22px"
          onClick={() => onOpenLinkInput("Blog")}
          fill={blogLinkTemp ? "black" : "#E3E3E3"}
        />
        <InstagramIcon
          width="22px"
          height="22px"
          onClick={() => onOpenLinkInput("Instagram")}
          fill={instagramLinkTemp ? "black" : "#E3E3E3"}
        />
      </Icons>
      <InputWrapper isOpen={isInputOpen}>
        <Input
          ref={inputRef}
          type="text"
          placeholder={`내 ${iconName} 링크를 입력하세요.`}
          onChange={onUpdateLinkTemp}
        />
        <InputButton onClick={() => onUpdateLink(iconName)}>
          <CheckIcon
            width="22px"
            height="22px"
            fill={isCheckActivate ? "#006ED3" : "black"}
          />
        </InputButton>
      </InputWrapper>
    </Container>
  );
};

export default ProfileLink;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  svg {
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Input = styled.input`
  position: relative;
  font-family: "LeferiPointWhite";
  font-weight: bold;
  padding: 0.5rem;
  width: 350px;
  border-width: 0px 0px 2px 0px;
  border-style: solid;
  &:focus {
    outline: none;
  }
`;

const InputButton = styled.button`
  position: absolute;
  right: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
