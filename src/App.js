import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #ff6600;
    color: #fff;
  }
`;

const App = () => {
  return (
    <Container>
      <Title>Styled Components Example</Title>
      <Button>Hover Me</Button>
    </Container>
  );
};

export default App;