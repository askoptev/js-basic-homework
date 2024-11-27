let card = "4561-1213-4367-2612";

const isValidCard = (card) => {
  if (typeof card !== "string") {
    return false;
  }
  let str = card.replaceAll("-", "");
  if (isNaN(Number(str))) {
    return false;
  }
  let arr = [...str];
  let lunaArray = arr.map((item, index) => {
    if ((index + 1) % 2 != 0) {
      item = item * 2;
      if (item > 9) {
        item = item - 9;
      }
    }
    return item;
  });
  
  let sum = lunaArray.reduce((acc, item) => acc + item);
  let result = sum % 10 == 0 ?? false;

  return result;
};

console.log(`Карта: ${card} - ${isValidCard(card) ? "" : "не"} корректна`);


