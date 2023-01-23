import styled from "styled-components";
import PlanKindButton from "./PlanKindButton";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import MonthlyYearlyButton from "./MonthlyYearlyButton";
import { Plan } from "../lib/types";
import { Dispatch, SetStateAction } from "react";
import { breakPt, prices } from "../lib/constants";


const Buttons = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 40px;

  @media screen and (${breakPt[720]}) {
    margin-top: 22px;
    flex-direction: column;
    gap: 12px;
  }
`

export default function SelectPlanForm({
  plan,
  setPlan
}: {
  plan: Plan,
  setPlan: Dispatch<SetStateAction<Plan>>
}) {
  return (
    <>
      <Buttons>
        <PlanKindButton
          iconSrc={arcadeIcon}
          planName='Arcade'
          price={
            plan.duration === 'monthly'
            ? `$${prices.arcade}/mo`
            : `$${prices.arcade * prices.yearlyMultiplier}/yr`
          }
          isSelected={plan.kind === 'arcade'}
          duration={plan.duration}
          onClick={() => setPlan((state) => ({...state, kind: 'arcade'}))}
        />
        <PlanKindButton
          iconSrc={advancedIcon}
          planName='Advanced'
          price=
            {plan.duration === 'monthly'
            ? `$${prices.advanced}/mo`
            : `$${prices.advanced * prices.yearlyMultiplier}/yr`
          }
          isSelected={plan.kind === 'advanced'}
          duration={plan.duration}
          onClick={() => setPlan((state) => ({...state, kind: 'advanced'}))}
        />
        <PlanKindButton
          iconSrc={proIcon}
          planName='Pro'
          price={
            plan.duration === 'monthly'
            ? `$${prices.pro}/mo`
            : `$${prices.pro * prices.yearlyMultiplier}/yr`}
          isSelected={plan.kind === 'pro'}
          duration={plan.duration}
          onClick={() => setPlan((state) => ({...state, kind: 'pro'}))}
        />      
      </Buttons>
      <MonthlyYearlyButton
        duration={plan.duration}
        onClick={() => setPlan((state) => ({
          ... state,
          duration: state.duration === 'monthly' ? 'yearly' : 'monthly'
        }))}
      />
    </>
  );
}