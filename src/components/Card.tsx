import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { formText } from "../lib/text";
import { AddOns, PersonalInfo, Plan } from "../lib/types";
import AddOnsForm from "./AddOnsForm";
import BackForwardButtons from "./BackForwardButtons";
import CardTitle from "./CardTitle";
import ProgressSidebar from "./ProgressSidebar";
import PlanForm from "./PersonalInfoForm";
import SelectPlanForm from "./SelectPlanForm";
import Summary from "./Summary";
import { submitForms } from "../lib/functions";
import Confirmation from "./Confirmation";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";


const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;

  @media screen and (${breakPt[720]}) {
    display: flex;
    flex-direction: column;
    place-items: unset;
  }
`

const FlexGrower = styled.div`
  display: none;

  @media screen and (${breakPt[720]}) {
    height: 100%;
    flex-grow: 2;
    flex-shrink: 2;
    background-color: ${theme.bg};
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`

const CardContainer = styled.div`
  background-color: white;
  width: min(940px, 92%);
  height: 600px;
  border-radius: 15px;
  margin: 40px auto;
  display: flex;
  box-shadow: 0 3px 10px ${theme.denim}11;

  @media screen and (${breakPt[720]}) {
    width: min(442px, 92%);
    margin-top: 0;
    display: block;
    height: auto;
    z-index: 2;
    position: relative;
    border-radius: 10px;
  }
`

const CardRight = styled.div`
  flex-grow: 1;
`

const Form = styled.div`
  width: min(83%, 450px);
  height: 568px;
  margin: auto;
  padding-top: 56px;
  position: relative;
  
  @media screen and (${breakPt[720]}) {
    width: min(calc(100% - 48px), 450px);
    height: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }  
`

export default function Card() {
  const [currentStep, setCurrentStep] = useState(1);

  const [personalInfo, setPersonalInfo]: [
    PersonalInfo,
    Dispatch<SetStateAction<PersonalInfo>>
  ] = useState({
    name: '',
    email: '',
    phone: ''
  });   

  const [plan, setPlan]: [
    Plan,
    Dispatch<SetStateAction<Plan>>
  ] = useState({
    kind: 'arcade',
    duration: 'monthly'
  } as Plan);

  const [addOns, setAddOns]: [
    AddOns,
    Dispatch<SetStateAction<AddOns>>
  ] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  } as AddOns);

  const [textFieldErrors, setTextFieldErrors] = useState({
    name: false,
    email: false,
    phone: false
  });

  return (
    <Flex>
      {/* Progress bar for widths < 720px */}
      <ProgressSidebar
        {...{currentStep}}
        isMobileSize={true}
      />
      <CardContainer>
        {/* Progress bar for widths >= 720px */}
        <ProgressSidebar
          {...{currentStep}}
          isMobileSize={false}
        /> 
        <CardRight>
          <Form>
            <CardTitle
              title={formText[currentStep - 1] ? formText[currentStep - 1].title : ''}
              subtitle={formText[currentStep - 1] ? formText[currentStep - 1].subtitle : ''}
            />
            {currentStep === 1 
              ? <PlanForm {...{personalInfo, setPersonalInfo, textFieldErrors}}/>
              : currentStep === 2
              ? <SelectPlanForm {...{plan, setPlan}} />
              : currentStep === 3
              ? <AddOnsForm
                  {...{addOns, setAddOns}}
                  duration={plan.duration}
                />
              : currentStep === 4
              ? <Summary {...{plan, addOns, setCurrentStep}}/>
              : <Confirmation/>
            }
            {/* Nav for widths >= 720px */}
            {currentStep < 5 &&
              <BackForwardButtons 
                {...{
                  currentStep,
                  setCurrentStep,
                  personalInfo,
                  setTextFieldErrors
                }}
                submit={() => submitForms(personalInfo, plan, addOns)}
                isMobileSize={false}
              />
            }
          </Form>
        </CardRight>
      </CardContainer>
      <FlexGrower>
        {/* Nav for widths >= 720px */}
        {currentStep < 5 &&
          <BackForwardButtons 
            {...{
              currentStep,
              setCurrentStep,
              personalInfo,
              setTextFieldErrors
            }}
            submit={() => submitForms(personalInfo, plan, addOns)}
            isMobileSize={true}
          />
        }
      </FlexGrower>
    </Flex>
  );
}