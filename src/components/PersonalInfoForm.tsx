import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { PersonalInfo } from "../lib/types";
import LabelledField from "./LabelledField";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${breakPt[720]}) {
    margin-top: 22px;
    gap: 16px;
  }  
`


export default function PlanForm({
  personalInfo,
  setPersonalInfo,
  textFieldErrors
}: {
  personalInfo: PersonalInfo,
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>,
  textFieldErrors: {name: boolean, email: boolean, phone: boolean}
}) {
  
  return (
    <Container>
      <LabelledField
        label='Name'
        placeholder='e.g. Stephen King'
        value={personalInfo.name}
        onChange={(event) => setPersonalInfo((state) => ({
          ...state,
          name: event.target.value
        }))}
        error={textFieldErrors.name}
      />
      <LabelledField
        label='Email Address'
        placeholder='e.g. stephenking@lorem.com'
        value={personalInfo.email}
        onChange={(event) => setPersonalInfo((state) => ({
          ...state,
          email: event.target.value
        }))}
        error={textFieldErrors.email}
      />
      <LabelledField
        label='Phone Number'
        placeholder='e.g. +1 234 567 890'
        value={personalInfo.phone}
        onChange={(event) => setPersonalInfo((state) => ({
          ...state,
          phone: event.target.value
        }))}
        error={textFieldErrors.phone}
      />
    </Container>
  );
}