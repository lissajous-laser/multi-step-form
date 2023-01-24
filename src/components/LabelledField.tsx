import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { breakPt } from "../lib/constants";
import { theme } from "../lib/theme";

const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.denim};
  position: relative;

  @media screen and (${breakPt[720]}) {
    font-size: 12px;
    line-height: 14px;
  }
`

const Input = styled.input<{error: boolean}>`
  width: min(100%, 450px);
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  display: block;
  border-radius: 8px;
  border: 1px solid ${(props) => props.error ? theme.red : theme.borderColor};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.denim};

  &:hover {
    border-color: ${theme.purple};
  }

  ::placeholder {
    color: ${theme.gray};
  }


  @media screen and (${breakPt[720]}) {
    height: 40px;
    margin-top: 3px;
    border-radius: 4px;
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

  @media screen and (${breakPt[720]}) {
    font-size: 12px;
  line-height: 14px;
  }
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