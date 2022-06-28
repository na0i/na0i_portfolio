import React, { useRef } from "react";
import styled from "styled-components";

const ProfileIntroduction = () => {
  const MAX_LENGTH = 2;
  const MAX_STR_LENGTH = 30;
  const placeHolder1 = "한줄 소개를 작성해보세요!\n저는 이런 사람이에요.";
  const placeHolder2 = "두줄까지 입력 가능해요.\n글자 수는 30자까지에요.";
  const introduction1Ref = useRef();
  const introduction2Ref = useRef();

  const limitMaxLength = (ref) => {
    const text = ref.current.value;
    const textArr = ref.current.value.split("\n");
    const rows = textArr.length;
    if (text.length > MAX_STR_LENGTH) {
      ref.current.value = text.slice(0, -1);
    }
    if (rows > MAX_LENGTH) {
      const newTextArr = textArr.slice(0, MAX_LENGTH);
      ref.current.value = newTextArr[0] + "\n" + newTextArr[1];
    }
  };

  return (
    <Container>
      <TopInput
        ref={introduction1Ref}
        name="topinput"
        rows="2"
        maxLength="30"
        placeholder={placeHolder1}
        onChange={() => limitMaxLength(introduction1Ref)}
      />
      <BottomInput
        ref={introduction2Ref}
        rows="2"
        maxLength="30"
        placeholder={placeHolder2}
        onChange={() => limitMaxLength(introduction2Ref)}
      />
    </Container>
  );
};

export default ProfileIntroduction;

const Container = styled.div`
  position: absolute;
`;

const TopInput = styled.textarea`
  width: 440px;
  text-align: left;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-size: var(--font-size-16);
  font-weight: 700;
  transform: translate(570px, -150px);
  outline-color: transparent;
  resize: none;
  overflow-y: hidden;
`;

const BottomInput = styled.textarea`
  width: 440px;
  text-align: right;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-size: var(--font-size-16);
  font-weight: 700;
  transform: translate(-570px, 150px);
  outline-color: transparent;
  resize: none;
  overflow-y: hidden;
`;
