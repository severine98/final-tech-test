
  export const functionThatGivesSmallerArrayBasedOnInput = (arrayOfNumber, numberToSearchFor) => {
  let numberToSearchForToString = numberToSearchFor.toString();
  const arrayOfNumberToString = arrayOfNumber.map(String);
  const finalArray = arrayOfNumberToString.filter(elementOFarray => elementOFarray.includes(numberToSearchForToString));
  return finalArray;
}

functionThatGivesSmallerArrayBasedOnInput(['123', '4386', '177', '415', '8', '383', '88', '238', '13'], '38',);