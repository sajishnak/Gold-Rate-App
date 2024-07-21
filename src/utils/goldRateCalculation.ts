export const goldRateCalculation = (currentPrice: number, tax: number) => {
  const goldRate = currentPrice / 1000;
  const taxRate = (goldRate * tax) / 100;
  const totalAmount = goldRate + taxRate;
  return totalAmount;
};
