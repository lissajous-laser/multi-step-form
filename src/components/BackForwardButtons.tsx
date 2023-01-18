import styled from "styled-components";
import { theme } from "../lib/theme";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`

const BackButton = styled.button`
  background-color: white;
  border: none;
  color: ${theme.gray};
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 16px;
  height: 48px;

  &:hover {
    cursor: pointer;
  }
`;

const ForwardButton = styled.button`
  background-color: ${theme.denim};
  color: white;
  border: none;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  width: 123px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`


export default function BackForwardButtons() {
  return (
    <Container>
      <BackButton>
        Go Back
      </BackButton>
      <ForwardButton>
        Next Step
      </ForwardButton>
    </Container>
  );
}