export const codeChecker = (code: string) => {
  const isCodeValid: boolean =
    code.length === 6 && code[5] !== "7" && !Number.isNaN(code);

  return isCodeValid;
};
