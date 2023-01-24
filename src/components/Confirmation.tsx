import styled from "styled-components";
import approved from '../assets/images/icon-thank-you.svg';
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";

const Container = styled.div`
  max-width: 450px;
  height: 238px;
  margin-top: 125px;
  text-align: center;

  @media screen and (${breakPt[720]}) {
    margin-top: 47px;
    margin-bottom: 47px;
  }  
`

const ApprovedImg = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;

  @media screen and (${breakPt[720]}) {
    width: 56px;
    height: 56px;
  }
`

const Heading = styled.h1`
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: ${theme.denim};

  @media screen and (${breakPt[720]}) {
    margin-top: 24px;
    font-size: 24px;
    line-height: 28px;
  }
`

const TextBody = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: ${theme.gray};

  @media screen and (${breakPt[720]}) {
    margin-top: 9px;
  }
`
export default function Confirmation() {
  return (
    <Container>
      <ApprovedImg src={approved} alt='big tick mark'/>
      <Heading>Thank you!</Heading>
      <TextBody>
        Thanks for confirming your subscription!
        We hope you have fun using our platform.
        If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </TextBody>
    </Container>
  );
}