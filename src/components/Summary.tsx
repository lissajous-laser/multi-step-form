import styled from "styled-components";
import { capitalise } from "../lib/functions";
import { theme } from "../lib/theme";
import { AddOns, Plan } from "../lib/types";

const Container = styled.div`
  width: 450px;
  margin-top: 40px;
`

const ItemisedList = styled.div`
  padding: 16px 24px 24px 24px;
  border-radius: 8px;
  background-color: ${theme.vLightGray};
  position: relative;
`

const PlanNameAndDuration = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.denim};
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
`

const PlanPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.denim};
  position: absolute;
  top: 31px;
  right: 24px;
`

const Divider = styled.div`
  width: 402px;
  height: 1px;
  margin-top: 24px;
  background-color: ${theme.gray};
  opacity: 0.2;
`

export default function Summary({
  plan,
  addOns
}: {
  plan: Plan,
  addOns: AddOns
}) {

  return (
    <Container>
      <ItemisedList>
        <PlanNameAndDuration>
          {`${capitalise(plan.kind)} (${capitalise(plan.duration)})`}
        </PlanNameAndDuration>
        <SelectPlanButton>
          Change
        </SelectPlanButton>
        <PlanPrice>
          $90/yr
        </PlanPrice>
        <Divider/>
        {Object.entries(addOns).filter((pair) => pair[1] === true)}
      </ItemisedList>
    </Container>
  );
}