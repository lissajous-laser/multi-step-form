import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { breakPt, prices } from "../lib/constants";
import { camelCaseToSentence, capitalise, totalPrice, typedEntries } from "../lib/functions";
import { theme } from "../lib/theme";
import { AddOns, Plan } from "../lib/types";
import SummaryAddOnItem from "./SummaryAddOnItem";

const Container = styled.div`
  width: min(100%, 450px);
  margin-top: 40px;

  @media screen and (${breakPt[720]}) {
    margin-top: 22px;
  }
`

const ItemisedList = styled.div`
  padding: 16px 24px 24px 24px;
  border-radius: 8px;
  background-color: ${theme.vLightGray};
  position: relative;

  @media screen and (${breakPt[720]}) {
    padding: 16px;
  }
`

const PlanNameAndDuration = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.denim};

  @media screen and (${breakPt[720]}) {
    font-size: 14px;
    line-height: 16px;
  }  
`

const SelectPlanButton = styled.button`
  width: 48px;
  height: 20px;
  margin-top: 7px;
  background-color: ${theme.vLightGray};
  color: ${theme.gray};
  text-decoration-line: underline;
  border: none;
  font-family: Ubuntu;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    cursor: pointer;
    color: ${theme.purple};
  }

  @media screen and (${breakPt[720]}) {
    margin-top: 3px;
  }  
`

const PlanPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.denim};
  position: absolute;
  top: 31px;
  right: 24px;

  @media screen and (${breakPt[720]}) {
    font-size: 14px;
  }   
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 24px;
  background-color: ${theme.gray};
  opacity: 0.2;

  @media screen and (${breakPt[720]}) {
    margin-top: 12px;
  }
`

const Total = styled.div`
  margin-top: 25px;
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;

  @media screen and (${breakPt[720]}) {
    margin-top: 24px;
    margin-left: 16px;
    margin-right: 16px;
  }
`

const TotalHeader = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.gray};
`

const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: ${theme.purple};

  @media screen and (${breakPt[720]}) {
    font-size: 16px;
  }
`

export default function Summary({
  plan,
  addOns,
  setCurrentStep
}: {
  plan: Plan,
  addOns: AddOns,
  setCurrentStep: Dispatch<SetStateAction<number>>
}) {

  return (
    <Container>
      <ItemisedList>
        <PlanNameAndDuration>
          {`${capitalise(plan.kind)} (${capitalise(plan.duration)})`}
        </PlanNameAndDuration>
        <SelectPlanButton onClick={() => setCurrentStep(2)}>
          Change
        </SelectPlanButton>
        <PlanPrice>
          {
            plan.duration === 'monthly'
            ? `+$${prices[plan.kind]}/mo`
            : `+$${prices[plan.kind] * prices.yearlyMultiplier}/yr`
          }
        </PlanPrice>
        <Divider/>
        {typedEntries(addOns)
          .filter((pair) => pair[1] === true)
          .map((pair) => 
            <SummaryAddOnItem
              name={camelCaseToSentence(pair[0])}
              price={
                plan.duration === 'monthly'
                ? `+$${prices[pair[0]]}/mo`
                : `+$${prices[pair[0]] * prices.yearlyMultiplier}/yr`}
            />
          )
        }
      </ItemisedList>
      <Total>
        <TotalHeader>
          Total (per {plan.duration.slice(0, plan.duration.length - 2)})
        </TotalHeader>
        <TotalPrice>
          ${totalPrice(plan, addOns)}/{plan.duration === 'monthly' ? 'mo' : 'yr'}
        </TotalPrice>
      </Total>
    </Container>
  );
}