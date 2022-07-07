import React, { useState, useRef, useEffect } from "react";
import { userStore } from "src/stores/userStore";
import styled from "styled-components";
import AddressDialog from "./addressDialog";

const BasicInfoItems = ({ birthday, address, email, contact }) => {
  const [birthDayTemp, setBirthDayTemp] = useState(birthday);
  const [addressTemp, setAddressTemp] = useState(address);
  const [emailTemp, setEmailTemp] = useState(email);
  const [contactTemp, setContactTemp] = useState(contact);
  const [isAddrDialogOpen, setIsAddrDialogOpen] = useState(false);
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [isEmailValid, setIsEmailVaild] = useState(true);
  const [isContactValid, setIsContactValid] = useState(true);
  const inputRef = useRef([]);

  const formattedAndValidateBirthday = (e) => {
    const pattern =
      /^(19[0-9][0-9]|20\d{2}).(0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/;
    e.target.value = e.target.value.replace(
      /(\d{4})(\d{2})(\d{2})/g,
      "$1.$2.$3"
    );
    if (e.target.value.match(pattern)) {
      setIsBirthdayValid(true);
      setBirthDayTemp(e.target.value);
    } else setIsBirthdayValid(false);
  };

  const validateEmail = (e) => {
    const pattern =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (e.target.value.match(pattern)) {
      setIsEmailVaild(true);
      setEmailTemp(e.target.value);
    } else setIsEmailVaild(false);
  };

  const formattedAndValidateContact = (e) => {
    const pattern = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    if (e.target.value.match(pattern)) {
      setIsContactValid(true);
      setContactTemp(e.target.value);
    } else setIsContactValid(false);
  };

  const onEnterDown = (e) => {
    for (let i = 0; i <= inputRef.current.length; i++) {
      if (inputRef.current[i]?.contains(e.target) && e.code === "Enter") {
        inputRef.current[i].blur();
        return;
      }
    }
  };

  const updateBasicInfo = () => {
    userStore.onUpdateBirthday(birthDayTemp);
    userStore.onUpdateAddress(addressTemp);
    userStore.onUpdateEmail(emailTemp);
    userStore.onUpdateContact(contactTemp);
  };

  useEffect(() => {
    window.addEventListener("keypress", onEnterDown);

    return () => {
      window.removeEventListener("keypress", onEnterDown);
    };
  }, []);

  const BasicInfoList = [
    {
      title: "생년월일",
      component: (
        <Input
          ref={(el) => (inputRef.current[0] = el)}
          placeholder="YYYY.MM.DD"
          isValid={isBirthdayValid}
          defaultValue={null ?? birthday}
          onChange={(e) => formattedAndValidateBirthday(e)}
          onBlur={updateBasicInfo}
        />
      ),
    },
    {
      title: "거주지",
      component: (
        <div ref={(el) => (inputRef.current[1] = el)}>
          <Input
            onClick={() => setIsAddrDialogOpen(true)}
            placeholder="거주지를 입력하세요."
            defaultValue={null ?? addressTemp}
            onBlur={updateBasicInfo}
          />
          <AddressDialog
            addressTemp={addressTemp}
            setAddress={setAddressTemp}
            isOpen={isAddrDialogOpen}
            setIsOpen={setIsAddrDialogOpen}
          />
        </div>
      ),
    },
    {
      title: "이메일",
      component: (
        <Input
          ref={(el) => (inputRef.current[2] = el)}
          placeholder="hello@developer.com"
          isValid={isEmailValid}
          defaultValue={null ?? email}
          onChange={(e) => validateEmail(e)}
          onBlur={updateBasicInfo}
        />
      ),
    },
    {
      title: "연락처",
      component: (
        <Input
          ref={(el) => (inputRef.current[3] = el)}
          placeholder="012-3456-7890"
          isValid={isContactValid}
          defaultValue={null ?? contact}
          onChange={(e) => formattedAndValidateContact(e)}
          onBlur={updateBasicInfo}
        />
      ),
    },
  ];

  return (
    <Items>
      {BasicInfoList.map((item) => (
        <Item key={item.title}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemComponent>{item.component}</ItemComponent>
        </Item>
      ))}
    </Items>
  );
};

export default BasicInfoItems;

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
