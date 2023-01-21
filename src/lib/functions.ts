import PlanForm from "../components/PersonalInfoForm";
import { prices } from "./constants";
import { AddOns, PersonalInfo, Plan } from "./types";

export const capitalise = (str: string) => {
  return str.replace(/^\w/, (match) => match.toUpperCase());
}

export const camelCaseToSentence = (str: string) => {
  return capitalise(
    str.replace(/[A-Z]/g, (match) => ' ' + match.toLowerCase())
  );
}

export const pascalCaseToSentence = (str: string) => {
  return capitalise(
    str.replace(/[A-Z]/g, (match) => ' ' + match)
  );
}

export const typedEntries = (addOns: AddOns) => {
  return Object.entries(addOns) as
    ['arcade' | 'advanced' | 'pro', boolean][];
}

export const totalPrice = (plan: Plan, addOns: AddOns) => {

  const selectedAddOns = typedEntries(addOns)
    .filter((entry) => entry[1])
    .map((entry) => entry[0]);

  const monthlyPrice = prices[plan.kind]
    + selectedAddOns.reduce((acc, curr) => acc + prices[curr], 0);
  
  return plan.duration === 'monthly'
    ? monthlyPrice
    : monthlyPrice * prices.yearlyMultiplier;
}

export const submitForms = (
  personalInfo: PersonalInfo,
  plan: Plan,
  addOns: AddOns
) => {
  // **Sample Post**  
  // const serverAddress = '/';
  // const stringifiedRes = fetch(serverAddress, {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({personalInfo, plan, addOns})
  // });

  // return stringifiedRes;
}