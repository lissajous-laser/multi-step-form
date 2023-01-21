import styled from "styled-components";
import { theme } from "../lib/theme";
import tick from '../assets/images/icon-checkmark.svg';
import { MouseEventHandler } from "react";

const Container = styled.button<{isActive: boolean}>`
  width: min(100%, 450px);
  height: 81px;
  padding: 16px 24px;
  background-color: ${(props) => props.isActive ? theme.vLightGray : 'white'};
  border-radius: 8px;
  border: 1px solid ${(props) =>
    props.isActive
    ? theme.purple
    : theme.borderColor
  };
  position: relative;
  font-family: Ubuntu;

  &:hover {
    cursor: pointer;
    border-color: ${theme.purple}
  }
`

const TickBox = styled.div<{isActive: boolean}>`
  position: absolute;
  left: 24px;
  top: 50%;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${(props) =>
    props.isActive
    ? theme.purple
    : theme.lightGray
  };
  background-color: ${(props) =>
    props.isActive
    ? theme.purple
    : 'white'
  };
  transform: translateY(-50%);
  display: grid;
  place-items: center;
`

const Tick = styled.img`
  width: 12px;
  height: 9px;
`

const MainText = styled.div`
  text-align: left;
  position: absolute;
  left: 68px;
  top: 16px;
`

const AddOnName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.denim};
`

const Description = styled.p`
  margin-top: 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.gray};
`

const Price = styled.p`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.purple}
`

/**
 * Displays an add-on option in AddOnsForm.
 */
export default function AddOnButton({
  addOnName,
  description,
  price,
  isActive,
  onClick
}: {
  addOnName: string,
  description: string,
  price: string,
  isActive: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Container {...{isActive, onClick}}>
      <TickBox {...{isActive}}>
        <Tick src={tick} alt='tick mark'/>
      </TickBox>
      <MainText>
        <AddOnName>{addOnName}</AddOnName>
        <Description>{description}</Description>
      </MainText>
      <Price>{price}</Price>
    </Container>
  );
}