import React from "react";
import styled from "styled-components";
import { ReactComponent as IconBlue } from "src/assets/icon/progressbarIcon-blue.svg";
import { ReactComponent as IconGrey } from "src/assets/icon/progressbarIcon-grey.svg";

const ProgressBar = () => {
  const menuList = [
    { id: 0, name: "프로필", isDone: false },
    { id: 1, name: "개인정보", isDone: true },
    { id: 2, name: "언어", isDone: false },
    { id: 3, name: "프레임워크", isDone: false },
    { id: 4, name: "학력 및 경력", isDone: false },
    { id: 5, name: "수상내역", isDone: false },
    { id: 6, name: "프로젝트", isDone: false },
  ];

  return (
    <Container>
      {menuList.map((menu) => (
        <div key={menu.id} className="items-center">
          <MenuIcon>{menu.isDone ? <IconBlue /> : <IconGrey />}</MenuIcon>
          <MenuText isBlue={menu.isDone}>{menu.name}</MenuText>
        </div>
      ))}
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuText = styled.div`
  font-size: var(--font-size-12);
  font-weight: 700;
  color: ${(props) => (props.isBlue ? "#0085FF" : "black")};
`;
