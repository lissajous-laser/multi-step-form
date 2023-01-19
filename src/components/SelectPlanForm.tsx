import styled from "styled-components";
import PlanKindButton from "./PlanKindButton";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import MonthlyYearlyButton from "./MonthlyYearlyButton";


const Buttons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 40px;
`

export default function SelectPlanForm() {
  return (
    <>
      <Buttons>
        <PlanKindButton
          iconSrc={arcadeIcon}
          planName='Arcade'
          price='$9/mo'  
        />
        <PlanKindButton
          iconSrc={advancedIcon}
          planName='Advanced'
          price='$12/mo'  
        />
        <PlanKindButton
          iconSrc={proIcon}
          planName='Pro'
          price='$15/mo'  
        />      
      </Buttons>
      <MonthlyYearlyButton/>
    </>
  );
}