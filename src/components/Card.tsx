import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { formText } from "../lib/text";
import { AddOns, PersonalInfo, Plan } from "../lib/types";
import BackForwardButtons from "./BackForwardButtons";
import CardTitle from "./CardTitle";
import Navbar from "./Navbar";
import PlanForm from "./PersonalInfoForm";

const Container = styled.div`
  background-color: white;
  width: 940px;
  height: 600px;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
`

const CardRight = styled.div`
  flex-grow: 1;
`

const Form = styled.section`
  width: 450px;
  height: 512px;
  margin: 56px auto 0;
  position: relative;
`



export default function Card() {
  const [currentStep, setCurrentStep] = useState(0);

  const [personalInfo, setPeronalInfo]: [
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

  return (
    <Container>
      <Navbar/>
      <CardRight>
        <Form>
          <CardTitle
            title={formText[currentStep].title}
            subtitle={formText[currentStep].subtitle}
          />
          {currentStep === 0 && <PlanForm/>}
          <BackForwardButtons/>
        </Form>
      </CardRight>
    </Container>
  );
}