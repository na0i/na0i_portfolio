import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as NullImg } from "src/assets/icon/profileImage-null.svg";
import { ReactComponent as LineImg } from "src/assets/icon/profileImage-line.svg";

const ProfileImage = () => {
  const [imgFileUrl, setImgFileUrl] = useState(null);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const fileReader = new FileReader();

  const onClickImgUploadDiv = (e) => {
    if (imgRef.current.contains(e.target)) {
      fileInputRef.current.click();
    }
  };

  const handleImgUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      fileReader.onloadend = () => {
        setImgFileUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
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
      <ImgWrapper ref={imgRef}>
        {imgFileUrl ? (
          <Img src={imgFileUrl} />
        ) : (
          <>
            <NullImgText>사진을 넣어주세요.</NullImgText>
            <NullImg width="75%" />
          </>
        )}
      </ImgWrapper>
      <LineWrapper>
        <LineImg />
      </LineWrapper>
      <ImgInput ref={fileInputRef} type="file" accept="image/*" />
    </>
  );
};

export default ProfileImage;

const ImgWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;

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

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

const ImgInput = styled.input`
  display: none;
`;

const NullImgText = styled.span`
  opacity: 0;
  margin: 20% 0px 5% 0;
  font-size: var(--font-size-16);
  font-weight: 700;
  transition: all 0.5s;

  ${ImgWrapper}:hover & {
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
