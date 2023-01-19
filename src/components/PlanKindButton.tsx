import styled from "styled-components";
import { theme } from "../lib/theme";

const BigButton = styled.button`
  width: 138px;
  height: 160px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid ${theme.borderColor};
  font-family: Ubuntu;
  text-align: left;
  padding: 20px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    cursor: pointer;
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
  color: ${theme.gray};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 7px;
`

export default function PlanKindButton({
  iconSrc,
  planName,
  price
}: {
  iconSrc: string,
  planName: string,
  price: string
}) {
  return (
    <BigButton>
      <Icon src={iconSrc} alt='icon'/>
      <Text>
        <PlanName>{planName}</PlanName>
        <Price>{price}</Price>
      </Text>
    </BigButton>
  );
}