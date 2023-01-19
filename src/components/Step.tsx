import styled from "styled-components";
import { theme } from "../lib/theme";

const Container = styled.div`
  display: flex;
  gap: 16px;
`

const CurrentStepIndicator = styled.div`
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid white;
  border-radius: 17px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;  
`

const Text = styled.div`

`

const Title = styled.h2`
  color: ${theme.lightBlue};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

const Subtitle = styled.p`
  margin-top: 4px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`

/**
 * Displays an individual step in the progress
 * sidebar. 
 */
export default function Step({
  index,
  name
}: {
  index: string,
  name: string
}) {
  return (
    <Container>
      <CurrentStepIndicator>
        {index}
      </CurrentStepIndicator>
      <Text>
        <Title>
          {`STEP ${index}`}
        </Title>
        <Subtitle>
          {name}
        </Subtitle>
      </Text>
    </Container>
  );
}