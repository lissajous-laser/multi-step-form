import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";

const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: ${theme.denim};

  @media screen and (${breakPt[720]}) {
    font-size: 24px;
    line-height: 28px;
  }
`

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: ${theme.gray};
  margin-top: 11px;

  @media screen and (${breakPt[720]}) {
    margin-top: 9px;
  }
`

export default function CardTitle({
  title,
  subtitle
}: {
  title: string,
  subtitle: string
}) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}