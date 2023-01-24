import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";

const Container = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  @media screen and (${breakPt[720]}) {
    margin-top: 12px;
  }
`
const NameText = styled.p`
  color: ${theme.gray};
`

const PriceText = styled.p`
  color: ${theme.denim};
`

export default function SummaryAddOnItem({
  name,
  price
}: {
  name: string,
  price: string
}) {
  return (
    <Container>
      <NameText>{name}</NameText>
      <PriceText>{price}</PriceText>
    </Container>
  );
}