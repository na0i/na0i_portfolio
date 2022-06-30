import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { userStore } from "src/stores/userStore";

const ProfileName = ({ name }) => {
  const MAX_NAME_LENGTH = 7;
  const inputRef = useRef();

  const onUpdateName = (text) => {
    userStore.onUpdateProfileName(text);
  };

  const onNameInput = (e) => {
    let text = e.target.innerText;
    // console.log(text);
    onUpdateName(text);
    if (text.length > MAX_NAME_LENGTH) {
      alert("이름은 최대 7글자까지 입력 가능합니다.");
      e.target.innerText = "";
    }
  };

  const onEnterDown = (e) => {
    if (inputRef.current.contains(e.target) && e.code === "Enter") {
      e.target.blur();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", onEnterDown);
    return () => {
      window.removeEventListener("keypress", onEnterDown);
    };
  }, []);

  return (
    <Container>
      <span>「</span>
      <NameInput
        ref={inputRef}
        placeholder={name ?? "김개발"}
        onInput={onNameInput}
        contentEditable={true}
        suppressContentEditableWarning={true}
      ></NameInput>
      <span>」</span>
    </Container>
  );
};

export default ProfileName;

const Container = styled.div`
  span {
    font-weight: 700;
    font-size: 40px;
    padding: 0px 5px;
  }
`;

const NameInput = styled.div`
  display: inline-block;
  height: 40px;
  font-size: 40px;
  font-weight: 700;
  :empty::before {
    content: attr(placeholder);
    font-weight: 700;
  }
  &:focus {
    outline: none;
    color: #339cff;
  }
`;
