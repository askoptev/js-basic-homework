const array = [1, 5, 6, 12, 32, 4, 0, -1];

const validate = a => a <= 5; 

const filterArray = (array, func) => {
  let resultArray = [];
  for (const item of array) {
    if (func(item)) {
      resultArray.push(item);
    }
  }
  return resultArray;
};

console.log(filterArray(array, validate));