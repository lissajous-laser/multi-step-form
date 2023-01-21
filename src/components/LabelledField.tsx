import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { theme } from "../lib/theme";

const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.denim};
  position: relative;
`

const Input = styled.input<{error: boolean}>`
  display: block;
  width: min(100%, 450px);
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.error ? theme.red : theme.borderColor};
  margin-top: 8px;
  padding-left: 16px;

  &:hover {
    border-color: ${theme.purple};
  }
`

const ErrorMsg = styled.p`
  position: absolute;
  top: -3px;
  right: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.red};
`

/**
 * Text input field for the PersonalInfoForm.
 */
export default function LabelledField({
  label,
  placeholder,
  value,
  onChange,
  error
}: {
  label: string,
  placeholder: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  error: boolean
}) {
  return (
    <Label>
      <p>{label}</p>
      {error && <ErrorMsg>This field is required</ErrorMsg>}
      <Input {...{placeholder, onChange, value, error}}/>
    </Label>
  );
}