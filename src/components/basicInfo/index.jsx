import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SectionTitle from "src/components/title/sectionTitle";
import AddressDialog from "./addressDialog";

const BasicInfo = () => {
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [isEmailValid, setIsEmailVaild] = useState(true);
  const [isContactValid, setIsContactValid] = useState(true);
  const inputRef = useRef([]);

  const BasicInfoList = [
    {
      id: 0,
      title: "생년월일",
      component: (
        <Input
          ref={(el) => (inputRef.current[0] = el)}
          placeholder="YYYY.MM.DD"
          isValid={isBirthdayValid}
          onChange={(e) => formattedAndValidateBirthday(e)}
        />
      ),
    },
    {
      id: 1,
      title: "거주지",
      component: <AddressDialog />,
    },
    {
      id: 2,
      title: "이메일",
      component: (
        <Input
          ref={(el) => (inputRef.current[2] = el)}
          placeholder="hello@developer.com"
          isValid={isEmailValid}
          onChange={(e) => validateEmail(e)}
        />
      ),
    },
    {
      id: 3,
      title: "연락처",
      component: (
        <Input
          ref={(el) => (inputRef.current[3] = el)}
          placeholder="012-3456-7890"
          isValid={isContactValid}
          onChange={(e) => formattedAndValidateContact(e)}
        />
      ),
    },
  ];

  const formattedAndValidateBirthday = (e) => {
    const pattern =
      /^(19[0-9][0-9]|20\d{2}).(0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/;
    e.target.value = e.target.value.replace(
      /(\d{4})(\d{2})(\d{2})/g,
      "$1.$2.$3"
    );
    e.target.value.match(pattern)
      ? setIsBirthdayValid(true)
      : setIsBirthdayValid(false);
  };

  const validateEmail = (e) => {
    const pattern =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    e.target.value.match(pattern)
      ? setIsEmailVaild(true)
      : setIsEmailVaild(false);
  };

  const formattedAndValidateContact = (e) => {
    const pattern = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    e.target.value.match(pattern)
      ? setIsContactValid(true)
      : setIsContactValid(false);
  };

  const onEnterDown = (e) => {
    for (let i = 0; i <= inputRef.current.length; i++) {
      if (inputRef.current[i]?.contains(e.target) && e.code === "Enter") {
        console.log("d");
        inputRef.current[i].blur();
        return;
      }
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
  display: flex;
  align-items: center;
  width: 25%;
  font-size: var(--font-size-16);
`;

const ItemComponent = styled.div`
  width: 60%;
`;

const Input = styled.input`
  width: 100%;
  border: transparent;
  font-family: "LeferiPointWhite";
  font-weight: 700;
  font-size: var(--font-size-16);
  border: transparent;
  :focus {
    background-color: ${(props) => (props.isValid ? "#EBF5FF" : "#fcf3f3")};
    border-bottom: ${(props) => (props.isValid ? "#67b3ff" : "#ffbdbd")};
    outline: transparent;
  }
`;
