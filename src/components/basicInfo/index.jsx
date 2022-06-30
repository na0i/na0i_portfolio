import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../title/sectionTitle";

const BasicInfo = () => {
  const [isEmailValid, setIsEmailVaild] = useState(true);

  const BasicInfoList = [
    {
      id: 0,
      title: "생년월일",
      component: <Input placeholder="YYYY.MM.DD" />,
    },
    {
      id: 1,
      title: "거주지",
      component: <Input placeholder="개발도 개발시 개발군" />,
    },
    {
      id: 2,
      title: "이메일",
      component: (
        <Input
          placeholder="hello@developer.com"
          isValid={isEmailValid}
          onChange={(e) => validateEmail(e)}
        />
      ),
    },
    {
      id: 3,
      title: "연락처",
      component: <Input placeholder="012-3456-7890" />,
    },
  ];

  const validateEmail = (e) => {
    const pattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    e.target.value.match(pattern)
      ? setIsEmailVaild(true)
      : setIsEmailVaild(false);
  };

  return (
    <Container>
      <SectionTitle text={"개인 정보"} />
      <Items>
        {BasicInfoList.map((item) => (
          <Item key={item.id}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemComponent>{item.component}</ItemComponent>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default BasicInfo;
const Container = styled.div`
  width: 100%;
  font-weight: 700;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
`;

const ItemTitle = styled.div`
  width: 15%;
  font-size: var(--font-size-16);
`;

const ItemComponent = styled.div`
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
  border: transparent;
  font-family: "LeferiPointWhite";
  border: transparent;
  :focus {
    border: ${(props) => (props.isValid ? "black" : "red")};
  }
`;
