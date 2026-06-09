const removePrecedingWhitespaces = (text: string) => {
  return text.replace(/\s+$/g, "");
};

export default removePrecedingWhitespaces;
