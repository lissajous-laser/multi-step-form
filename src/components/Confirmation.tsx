import styled from "styled-components";
import approved from '../assets/images/icon-thank-you.svg';
import { theme } from "../lib/theme";

const Container = styled.div`
  width: 100%;
  height: 238px;
  margin-top: 181px;
  text-align: center;
`

const ApprovedImg = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
`

const Heading = styled.h1`
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: ${theme.denim};
`

const TextBody = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: ${theme.gray};
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