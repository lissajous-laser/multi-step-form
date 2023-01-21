import styled from 'styled-components';
import bgImg from '../assets/images/bg-sidebar-desktop.svg';
import Step from './Step';


const Container = styled.div`
  width: clamp(183px, 27%, 274px);
  height: 568px;
  margin-left: 16px;
  margin-top: 16px;
  background-image: url(${bgImg});
  background-position: center;
  border-radius: 10px;
`

const StepList = styled.div`
  width: 153px;
  height: 228px;
  margin-top: 40px;
  margin-left: clamp(20px, 10%, 32px);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export default function ProgressSidebar({
  currentStep
}: {
  currentStep: number
}) {
  return (
    <Container>
      <StepList>
        <Step
          index='1'
          name='YOUR INFO'
          {...{currentStep}}
        />
        <Step
          index='2'
          name='SELECT PLAN'
          {...{currentStep}}
        />
        <Step
          index='3'
          name='ADD-ONS'
          {...{currentStep}}
        />
        <Step
          index='4'
          name='SUMMARY'
          {...{currentStep}}
        />
      </StepList>
    </Container>
  );
}