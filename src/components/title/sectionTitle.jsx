import React from "react";
import styled from "styled-components";

const SectionTitle = ({ text }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <Line></Line>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-size: 25px;
`;

const Line = styled.div`
  position: relative;
  z-index: -1;
  bottom: 0.4rem;
  height: 0.5rem;
  background-color: #cee8ff;
`;
