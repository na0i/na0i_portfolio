import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { userStore } from "src/stores/userStore";
import SectionTitle from "src/components/title/sectionTitle";
import BasicInfoItems from "./basicInfoItems";

const BasicInfo = () => {
  const [basicInfo, setBasicInfo] = useState();

  useEffect(() => {
    async function fetchBasicInfoData() {
      const response = await userStore.getBasicInfo();
      setBasicInfo({ ...response });
    }
    fetchBasicInfoData();
  }, []);

  const onUpdateBirthday = (data) => {
    userStore.onUpdateBirthday(data);
  };

  const onUpdateAddress = (data) => {
    userStore.onUpdateAddress(data);
  };

  const onUpdateEmail = (data) => {
    userStore.onUpdateEmail(data);
  };

  const onUpdateContact = (data) => {
    userStore.onUpdateContact(data);
  };

  return (
    <>
      {basicInfo ? (
        <Container>
          <SectionTitle text={"개인 정보"} />
          <BasicInfoItems
            birthday={basicInfo.birthday}
            address={basicInfo.address}
            email={basicInfo.email}
            contact={basicInfo.contact}
            onUpdateBirthday={onUpdateBirthday}
            onUpdateAddress={onUpdateAddress}
            onUpdateEmail={onUpdateEmail}
            onUpdateContact={onUpdateContact}
          />
        </Container>
      ) : null}
    </>
  );
};

export default BasicInfo;
const Container = styled.div`
  width: 100%;
  font-weight: 700;
`;
