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

const Heading = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const H2 = styled.h2`
  color: navy;
  font-size: 55px;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const H3 = styled.h3`
  color: purple;
  font-size: 48px;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const H4 = styled.h4`
  color: blue;
  font-size: 43px;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const H5 = styled.h5`
  color: cyan;
  font-size: 35px;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const H6 = styled.h6`
  color: green;
  font-size: 30px;
  margin: 10px 0;
  &:hover {
    color: pink;
  }
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid #3498db;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: white;
    color: #3498db;
  }

  &:active {
    opacity: 0.8;
  }
`;

const App = () => {
  return (
    <Container>
      <Heading>
        <H1>Lorem ipsum dolor</H1>
        <H2>Sit amet consectetur</H2>
        <H3>Adipisicing elit</H3>
        <H4>Quisquam veritatis</H4>
        <H5>Dolores reiciendis</H5>
        <H6>Eveniet hic optio</H6>
      </Heading>
      <Button>Hover Me</Button>
    </Container>
  );
};

export default App;