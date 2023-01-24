import styled from 'styled-components';
import bgImgLg from '../assets/images/bg-sidebar-desktop.svg';
import bgImgSm from '../assets/images/bg-sidebar-mobile.svg';
import { breakPt } from '../lib/constants';
import Step from './Step';


const Container = styled.div<{isMobileSize: boolean}>`
  width: clamp(183px, 30%, 274px);
  height: 568px;
  margin-left: 16px;
  margin-top: 16px;
  background-image: url(${bgImgLg});
  background-position: center;
  border-radius: 10px;
  display: ${(props) => props.isMobileSize ? 'none' : 'block'};

  @media screen and (${breakPt[720]}) {
    width: 100%;
    height: 172px;
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-image: url(${bgImgSm});
    background-size: cover;
    background-position: 50% 20%;
    display: ${(props) => props.isMobileSize ? 'block' : 'none'};
    z-index: 1;
  }
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

  @media screen and (${breakPt[720]}) {
    width: 180px;
    height: 33px;
    flex-direction: row;
    gap: 16px;
    margin: 32px auto 0;
  }
`

export default function ProgressSidebar({
  currentStep,
  isMobileSize
}: {
  currentStep: number,
  isMobileSize: boolean
}) {
  return (
    <Container {...{isMobileSize}}>
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