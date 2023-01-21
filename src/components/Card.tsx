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

const Container = styled.div`
  background-color: white;
  width: min(940px, 92%);
  height: 600px;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
`

const CardRight = styled.div`
  flex-grow: 1;
`

const Form = styled.div`
  width: min(83%, 450px);
  height: 512px;
  margin: 56px auto 0;
  position: relative;
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
    <Container>
      <ProgressSidebar {...{currentStep}}/>
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
            ? <Summary {...{plan, addOns}}/>
            : <Confirmation/>
          }
          {currentStep < 5 &&
            <BackForwardButtons 
              {...{
                currentStep,
                setCurrentStep,
                personalInfo,
                setTextFieldErrors
              }}
              submit={() => submitForms(personalInfo, plan, addOns)}
            />
          }
        </Form>
      </CardRight>
    </Container>
  );
}