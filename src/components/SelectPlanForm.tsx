import styled from "styled-components";
import PlanKindButton from "./PlanKindButton";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import MonthlyYearlyButton from "./MonthlyYearlyButton";


const PlanButtons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 40px;
`



const ArcadeButton = styled(PlanKindButton)`

`;

export default function SelectPlanForm() {
  return (
    <>
      <PlanButtons>
        <ArcadeButton
          iconSrc={arcadeIcon}
          planName='Arcade'
          price='$9/mo'  
        />
        <ArcadeButton
          iconSrc={advancedIcon}
          planName='Advanced'
          price='$12/mo'  
        />
        <ArcadeButton
          iconSrc={proIcon}
          planName='Pro'
          price='$15/mo'  
        />      
      </PlanButtons>
      <MonthlyYearlyButton/>
    </>
  );
}