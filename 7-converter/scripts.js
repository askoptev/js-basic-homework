function convertCurrency(amountMoney, currentCurrency, targetCurrency) {
  const currency = ['RUB', 'USD', 'EUR', 'CAD'];
  const rate = [1, 100, 110, 90];

  if (!amountMoney || typeof amountMoney !== "number") { return null };    
  if (!currency.includes(currentCurrency)) { return null };
  if (!currency.includes(targetCurrency)) { return null };

  const currentRate = rate[currency.indexOf(currentCurrency)];
  const targetRate = rate[currency.indexOf(targetCurrency)]
  const coefficient = currentRate / targetRate;

  return amountMoney * coefficient;

}

const result = convertCurrency(1500, 'EUR', 'USD');

console.log(`Результат конвертации: ${result}`);
