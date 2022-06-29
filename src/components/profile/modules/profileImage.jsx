import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { userStore } from "src/stores/userStore";
import { ReactComponent as NullImg } from "src/assets/icon/profileImage-null.svg";
import { ReactComponent as LineImg } from "src/assets/icon/profileImage-line.svg";

const MAX_LENGTH = 2;
const MAX_STR_LENGTH = 30;

const ProfileImage = ({
  profileImgUrl,
  topIntroduction,
  bottomIntroduction,
}) => {
  const [profileImgTemp, setProfileImgTemp] = useState(profileImgUrl);
  const [topIntroductionTemp, setTopIntroductionTemp] =
    useState(topIntroduction);
  const [bottomIntroductionTemp, setBottomIntroductionTemp] =
    useState(bottomIntroduction);
  const fileReader = new FileReader();
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const topTextInputRef = useRef(null);
  const BottomTextInputRef = useRef(null);

  const onClickImgUploadDiv = (e) => {
    if (imgRef.current.contains(e.target)) {
      fileInputRef.current.click();
    }
  };

  const handleImgUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      fileReader.onloadend = () => {
        setProfileImgTemp(fileReader.result);
        userStore.onUpdateProfileImg(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onDeleteImg = () => {
    setProfileImgTemp();
    userStore.onUpdateProfileImg();
  };

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
    if (ref.current.name === "topIntroduction") {
      setTopIntroductionTemp(ref.current.value);
      userStore.onUpdateTopIntroduction(ref.current.value);
    }
    if (ref.current.name === "bottomIntroduction") {
      setBottomIntroductionTemp(ref.current.value);
      userStore.onUpdateBottomIntroduction(ref.current.value);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickImgUploadDiv);
    return () => window.removeEventListener("click", onClickImgUploadDiv);
  });

  useEffect(() => {
    window.addEventListener("change", handleImgUpload);
    return () => window.removeEventListener("change", handleImgUpload);
  });

  return (
    <>
      <Container>
        {profileImgTemp ? (
          <ImgWrapper>
            <Img src={profileImgTemp} ref={imgRef} />
            <DeleteBtn onClick={onDeleteImg}>사진 삭제</DeleteBtn>
          </ImgWrapper>
        ) : (
          <NullImgWrapper ref={imgRef}>
            <NullImgText>사진을 넣어주세요.</NullImgText>
            <NullImg width="75%" />
          </NullImgWrapper>
        )}
        <LineWrapper>
          <LineImg />
        </LineWrapper>
        <TopInput
          ref={topTextInputRef}
          name="topIntroduction"
          rows="2"
          maxLength="30"
          defaultValue={null ?? topIntroductionTemp}
          placeholder="한줄 소개를 작성해보세요!&#13;&#10;저는 이런 사람이에요."
          onChange={() => limitMaxLength(topTextInputRef)}
        />
        <BottomInput
          ref={BottomTextInputRef}
          name="bottomIntroduction"
          rows="2"
          maxLength="30"
          defaultValue={null ?? bottomIntroductionTemp}
          placeholder="두줄까지 입력 가능해요.&#13;&#10;글자 수는 30자까지에요."
          onChange={() => limitMaxLength(BottomTextInputRef)}
        />
      </Container>
      <ImgInput ref={fileInputRef} type="file" accept="image/*" />
    </>
  );
};

export default ProfileImage;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 300px;
  height: 300px;
  object-fit: cover;

  border: 5px solid transparent;
  border-radius: 100%;
  background-image: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(
      140.08deg,
      #57aeff 12.18%,
      #31475b 42.5%,
      #4aa8ff 65.33%,
      #12304b 87.78%,
      rgba(0, 0, 0, 0) 87.78%
    );
  background-origin: content-box;
  background-clip: content-box, border-box;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

const DeleteBtn = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: "LeferiPointWhite";
  font-size: var(--font-size-16);
  font-weight: 700;
  padding: 8px 16px;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #04549a97;
  color: white;
  cursor: pointer;
  ${ImgWrapper}:hover & {
    opacity: 1;
  }
`;

const ImgInput = styled.input`
  display: none;
`;

const NullImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 100%;
`;

const NullImgText = styled.span`
  opacity: 0;
  margin: 20% 0px 5% 0;
  font-size: var(--font-size-16);
  font-weight: 700;
  transition: all 0.5s;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const LineWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TopInput = styled.textarea`
  position: absolute;
  top: 0;
  width: 440px;
  text-align: left;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-size: var(--font-size-16);
  font-weight: 700;
  outline-color: transparent;
  resize: none;
  transform: translate(365px, -16px);
  overflow-y: hidden;
`;

const BottomInput = styled.textarea`
  position: absolute;
  bottom: 0;
  width: 440px;
  text-align: right;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-size: var(--font-size-16);
  font-weight: 700;
  transform: translate(-365px, 16px);
  outline-color: transparent;
  resize: none;
  overflow-y: hidden;
`;
