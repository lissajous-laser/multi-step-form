import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";
import { PersonalInfo } from "../lib/types";

const Container = styled.nav<{isMobileSize: boolean}>`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: ${(props) => props.isMobileSize ? 'none' : 'block'};

  @media screen and (${breakPt[720]}) {
    height: 72px;
    margin: 0 auto;
    padding-top: 16px;
    background-color: white;
    display: ${(props) => props.isMobileSize ? 'block' : 'none'};
  }
`

const Cluster = styled.div`
  @media screen and (${breakPt[720]}) {
    width: min(442px, 92%);
    margin: 0 auto;
  }  
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

  @media screen and (${breakPt[720]}) {
    background-color: white;
    height: 40px;
    font-size: 14px;
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

  @media screen and (${breakPt[720]}) {
    width: 97px;
    height: 40px;
    font-size: 14px;
  }
`

export default function BackForwardButtons({
  currentStep,
  setCurrentStep,
  personalInfo,
  setTextFieldErrors,
  submit,
  isMobileSize
}: {
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
  personalInfo: PersonalInfo,
  setTextFieldErrors: Dispatch<SetStateAction<{
    name: boolean,
    email: boolean,
    phone: boolean
  }>>,
  submit: () => void,
  isMobileSize: boolean
}) {

  const forwardButtonClickHandler = () => {
    if (currentStep === 4) {
      submit();
    }

    if (currentStep !== 1) {
      setCurrentStep((state) => state + 1);
      return;
    }

    let newErrState = {name: true, email: true, phone: true};

    if (personalInfo.name.length === 0) {
      newErrState.name = true;
    } else {
      newErrState.name = false;
    }

    if (personalInfo.email.length === 0) {
      newErrState.email = true;
    } else {
      newErrState.email = false;
    }

    if (personalInfo.phone.length === 0) {
      newErrState.phone = true;
    } else {
      newErrState.phone = false;
    }

    setTextFieldErrors(newErrState);

    if (personalInfo.name.length > 0
      && personalInfo.email.length > 0
      && personalInfo.phone.length > 0) {

      setCurrentStep((state) => state + 1);
    }    
  }

  return (
    <Container {... {isMobileSize}}>
      <Cluster>
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
      </Cluster>
    </Container>
  );
}