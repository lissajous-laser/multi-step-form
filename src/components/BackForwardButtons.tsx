import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "../lib/theme";

const Container = styled.nav`
  width: 100%;
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
    color: ${theme.denim}
  }
`;

const ForwardButton = styled.button<{isConfirm: boolean}>`
  background-color: ${(props) =>
    props.isConfirm
    ? theme.purple
    : theme.denim
  };
  color: white;
  border: none;
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
  width: 123px;
  border-radius: 8px;
  float: right;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isConfirm
      ? theme.hover_purple
      : theme.hover_demin
    };
  }
`


export default function BackForwardButtons({
  currentStep,
  setCurrentStep
}: {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>
}) {
  return (
    <Container>
      {currentStep > 1 &&
        <BackButton
          onClick={() => setCurrentStep((state) => state - 1)}
        >
          Go Back
        </BackButton>
      }
      <ForwardButton
        onClick={() => setCurrentStep((state) => state + 1)}
        isConfirm={currentStep === 4}
      >
        {currentStep === 4 ? 'Confirm' : 'Next Step'}
      </ForwardButton>
    </Container>
  );
}