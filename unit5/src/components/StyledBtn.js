import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightcyan;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: royalblue;
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

function StyledBtn() {
    return (
        <Container>
            <h2>First Project</h2>
            <StyledButton>Click here!</StyledButton>
        </Container>
    )
}

export default StyledBtn;