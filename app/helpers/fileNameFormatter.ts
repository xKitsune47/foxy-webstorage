const fileNameFormat = (text: string, charactersNum: number = 12): string => {
  if (text.length <= charactersNum) {
    return text;
  }

  return `${text.slice(0, charactersNum)}...`;
};

export default fileNameFormat;
