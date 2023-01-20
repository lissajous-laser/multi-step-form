export const capitalise = (str: string) => {
  return str.replace(/^\w/, (match) => match.toUpperCase());
}

export const camelCaseToEng = (str: string) => {
  return capitalise(
    str.replace(/[A-Z]/g, (match) => ' ' + match.toLowerCase())
  );
}