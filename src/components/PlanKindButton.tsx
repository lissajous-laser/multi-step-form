import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "../lib/theme";
import { Plan } from "../lib/types";

/**
 * A button to select to the desired plan in
 * SelectPlanForm.
 */
const BigButton = styled.button<{isSelected: boolean}>`
  width: min(30%, 138px);
  height: 160px;
  background-color: ${(props) =>
    props.isSelected
    ? theme.vLightGray
    : 'white'};
  border-radius: 8px;
  border: 1px solid ${(props) =>
    props.isSelected
    ? theme.purple
    : theme.borderColor
  };
  font-family: Ubuntu;
  text-align: left;
  padding: 20px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
    border-color: ${theme.purple}
  }
`

const Icon = styled.img`
  width: 40px;
  height: 40px
`

const Text = styled.div`
`

const PlanName = styled.h2`
  color: ${theme.denim};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`

const Price = styled.p`
  margin-top: 7px;
  color: ${theme.gray};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`

const Discount = styled.p`
  margin-top: 6px;
  color: ${theme.denim};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

export default function PlanKindButton({
  iconSrc,
  planName,
  price,
  isSelected,
  onClick,
  duration
}: {
  iconSrc: string,
  planName: string,
  price: string,
  isSelected: boolean,
  duration: 'monthly' | 'yearly',
  onClick: MouseEventHandler<HTMLButtonElement>,
}) {
  return (
    <BigButton {...{isSelected, onClick}}>
      <Icon src={iconSrc} alt='icon'/>
      <Text>
        <PlanName>{planName}</PlanName>
        <Price>{price}</Price>
        {duration === 'yearly' &&
          <Discount>2 months free</Discount>
        }
      </Text>
    </BigButton>
  );
}