import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "../lib/theme";
import { PersonalInfo } from "../lib/types";

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
  setCurrentStep,
  personalInfo,
  setTextFieldErrors,
  submit
}: {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
  personalInfo: PersonalInfo,
  setTextFieldErrors: Dispatch<SetStateAction<{
    name: boolean,
    email: boolean,
    phone: boolean
  }>>,
  submit: () => void
}) {

  const forwardButtonClickHandler = () => {
    if (currentStep === 4) {
      submit();
      setCurrentStep((state) => state + 1);
      return;
    }

    if (currentStep !== 1) {
      setCurrentStep((state) => state + 1);
      return;
    }

    if (personalInfo.name.length === 0) {
      setTextFieldErrors((state) => ({...state, name: true}));
    }
    if (personalInfo.email.length === 0) {
      setTextFieldErrors((state) => ({...state, email: true}));
    }
    if (personalInfo.phone.length === 0) {
      setTextFieldErrors((state) => ({...state, phone: true}));
    }
    if (personalInfo.name.length > 0
      && personalInfo.email.length > 0
      && personalInfo.phone.length > 0) {

      setTextFieldErrors({name: false, email: false, phone: false})
      setCurrentStep((state) => state + 1);
    }
  }

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
        onClick={forwardButtonClickHandler}
        isConfirm={currentStep === 4}
      >
        {currentStep === 4 ? 'Confirm' : 'Next Step'}
      </ForwardButton>
    </Container>
  );
}