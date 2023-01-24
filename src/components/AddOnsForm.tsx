import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { breakPt, prices } from "../lib/constants";
import { AddOns } from "../lib/types";
import AddOnButton from "./AddOnButton";

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (${breakPt[720]}) {
    margin-top: 22px;
    gap: 12px;
  }
`

export default function AddOnsForm({
  addOns,
  duration,
  setAddOns
}: {
  addOns: AddOns,
  duration: 'monthly' | 'yearly'
  setAddOns: Dispatch<SetStateAction<AddOns>>
}) {



  return (
    <Buttons>
      <AddOnButton
        addOnName='Online service'
        description='Access to multiplayer games'
        price={
          duration === 'monthly'
          ? `+$${prices.onlineService}/mo`
          : `+$${prices.onlineService * prices.yearlyMultiplier}/yr`
        }
        isActive={addOns.onlineService}
        onClick={() => setAddOns((state) => ({
          ...addOns,
          onlineService: !state.onlineService
        }))}
      />
      <AddOnButton
        addOnName='Larger storage'
        description='Extra 1TB of cloud save'
        price={duration === 'monthly'
          ? `+$${prices.largerStorage}/mo`
          : `+$${prices.largerStorage * prices.yearlyMultiplier}/yr`
        }
        isActive={addOns.largerStorage}
        onClick={() => setAddOns((state) => ({
          ...addOns,
          largerStorage: !state.largerStorage
        }))}
      />
      <AddOnButton
        addOnName='Customizable profile'
        description='Custom theme on your profile'
        price={duration === 'monthly'
          ? `+$${prices.customizableProfile}/mo`
          : `+$${prices.customizableProfile * prices.yearlyMultiplier}/yr`
        }
        isActive={addOns.customizableProfile}
        onClick={() => setAddOns((state) => ({
          ...addOns,
          customizableProfile: !state.customizableProfile
        }))}
      />
    </Buttons>
  );
}