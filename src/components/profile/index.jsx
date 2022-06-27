import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Profile = () => {
  const [imgFileUrl, setImgFileUrl] = useState(null);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);
  const fileReader = new FileReader();

  const onClickUploadDiv = (e) => {
    if (imgRef.current.contains(e.target)) {
      fileInputRef.current.click();
    }
  };

  const handleImgUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      fileReader.onloadend = (e) => {
        setImgFileUrl(fileReader.result);
      };
    }
    fileReader.readAsDataURL(file);
  };

  console.log(imgFileUrl);

  useEffect(() => {
    window.addEventListener("click", onClickUploadDiv);
    return () => window.removeEventListener("click", onClickUploadDiv);
  });

  useEffect(() => {
    window.addEventListener("change", handleImgUpload);
    return () => window.removeEventListener("change", handleImgUpload);
  });

  return (
    <Container>
      <ImgWrapper ref={imgRef}></ImgWrapper>
      <img src={imgFileUrl}></img>
      <ImgInput ref={fileInputRef} type="file" accept="image/*" />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100%;
`;

const ImgInput = styled.input`
  display: none;
`;
