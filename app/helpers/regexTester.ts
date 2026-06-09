const filenameRegex = /^[a-zA-Z0-9._ -]+$/;

const regexTester = (text: string) => {
  return filenameRegex.test(text);
};

export default regexTester;
