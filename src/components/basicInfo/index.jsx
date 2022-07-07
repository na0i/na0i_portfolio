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
