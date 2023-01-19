import styled from "styled-components";
import AddOnButton from "./AddOnButton";

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function AddOnsForm() {
  return (
    <Buttons>
      <AddOnButton
        addOnName='Online service'
        description='Access to multiplayer games'
        price='+1/mo'
      />
      <AddOnButton
        addOnName='Larger storage'
        description='Extra 1TB of cloud save'
        price='+2/mo'
      />
      <AddOnButton
        addOnName='Customizable profile'
        description='Custom theme on your profile'
        price='+2/mo'
      />
    </Buttons>
  );
}