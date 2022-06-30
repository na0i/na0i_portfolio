import React from "react";
import styled from "styled-components";

const SectionTitle = ({ text }) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
  background: linear-gradient(to top, #cee8ff 20%, transparent 40%);
`;
