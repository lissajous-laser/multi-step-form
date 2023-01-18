import styled from "styled-components";
import { theme } from "../lib/theme";

const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.denim};
  margin-top: 24px;
`

const Input = styled.input`
  display: block;
  width: 450px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${theme.borderColor};
  margin-top: 8px;
  padding-left: 16px;
`

export default function LabelledField({
  label,
  placeholder
}: {
  label: string,
  placeholder: string
}) {
  return (
    <Label>
      <p>{label}</p>
      <Input placeholder={placeholder}/>
    </Label>
  );
}