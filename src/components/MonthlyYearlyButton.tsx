import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "../lib/theme";
import {Plan} from '../lib/types';

const Container = styled.button`
  width: 450px;
  height: 48px;
  margin-top: 24px;
  background-color: ${theme.vLightGray};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  &:hover {
    cursor: pointer;
  }
`

const ButtonLabel = styled.p`
  color: ${theme.denim};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`

const Lozenge = styled.div`
  width: 38px;
  height: 20px;
  padding: 4px;
  border-radius: 10px;
  background-color: ${theme.denim};
`

const Marker = styled.div<{duration: 'monthly' | 'yearly'}>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  float: ${(props) =>
    props.duration === 'monthly'
    ? 'left'
    : 'right'
  };
`


/**
 * Displays button to switch between montly and
 * yearly subscription.
 */
export default function MonthlyYearlyButton({
  duration,
  onClick
}: {
  duration: 'monthly' | 'yearly',
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Container {...{onClick}}>
      <ButtonLabel>Monthly</ButtonLabel>
      <Lozenge>
        <Marker {...{duration}}/>
      </Lozenge>
      <ButtonLabel>Yearly</ButtonLabel>
    </Container>
  );
}