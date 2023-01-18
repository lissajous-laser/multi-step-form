import styled from "styled-components";
import LabelledField from "./LabelledField";

const Container = styled.div`
  margin-top: 40px;
`


export default function PlanForm() {
  return (
    <Container>
      <LabelledField label='Name' placeholder='e.g. Stephen King'/>
      <LabelledField label='Email Address' placeholder='e.g. stephenking@lorem.com'/>
      <LabelledField label='Phone Number' placeholder='e.g. +1 234 567 890'/>
    </Container>
  );
}