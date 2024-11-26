const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const validateFormat = (element) => {  
  if (!element || typeof element !== 'string') { return false };
  if (element.length !== 10) { return false };  
  const slash = element.includes('/');
  const hyphen = element.includes('-');
  if (!slash && !hyphen) { return false };
  return true;
}

const checkElementsDate = (day, month, year) => {
  day = Number(day);
  month = Number(month);
  year = Number(year);
  if (day <= 0 || day > 21 || Number.isNaN(year)) { return false };
  if (month <= 0 || day > 12 || Number.isNaN(year)) { return false };
  if (year < 0 || Number.isNaN(year)) { return false };
  return true;
}; 

const validateRange = (element) => {
  const slash = element.includes('/');
  const hyphen = element.includes('-');
  midArray = slash ? element.split('/') : hyphen ? element.split('-') : midArray;
  if (midArray.length !== 3) { return false };
  if (!slash && !checkElementsDate(midArray[1], midArray[0], midArray[2])) { return false };
  if (!hyphen && !checkElementsDate(midArray[0], midArray[1], midArray[2])) { return false };    
  return true;
}

const reverseDate = (element) => {
  let result = element;  
  const slash = element.includes('/');
  if (!slash) { return result };
  midArray = element.split('/');
  [midArray[0], midArray[1]] = [midArray[1], midArray[0]];
  result = midArray.join('-');
  return result;
}

const result = array
  .filter(item => validateFormat(item))
  .filter(item => validateRange(item))
  .map(item => reverseDate(item)); 

console.log(result);
