import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";

const Container = styled.div`
  display: flex;
  gap: min(9%, 16px);

  @media screen and (${breakPt[720]}) {
    display: block;
  }
`

const CurrentStepIndicator = styled.div<{isCurrent: boolean}>`
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid ${(props) =>
    props.isCurrent
    ? theme.skyBlue
    : 'white'
  };
  border-radius: 17px;
  color: ${(props) =>
    props.isCurrent
    ? theme.denim
    : 'white'
  };
  background-color: ${(props) =>
    props.isCurrent
    ? theme.skyBlue
    : 'transparent'
  };
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;  
`

const Title = styled.h2`
  color: ${theme.lightBlue};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  @media screen and (${breakPt[720]}) {
    display: none;
  }
`

const Subtitle = styled.p`
  margin-top: 4px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  @media screen and (${breakPt[720]}) {
    display: none;
  }
`

/**
 * Displays an individual step in the progress
 * sidebar. 
 */
export default function Step({
  index,
  name,
  currentStep
}: {
  index: string,
  name: string,
  currentStep: number
}) {
  return (
    <Container>
      <CurrentStepIndicator
        isCurrent={index === String(currentStep)}
      >
        {index}
      </CurrentStepIndicator>
      <div>
        <Title>
          {`STEP ${index}`}
          
        </Title>
        <Subtitle>
          {name}
        </Subtitle>
      </div>
    </Container>
  );
}