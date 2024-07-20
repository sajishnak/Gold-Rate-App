export type BuyPrice = {
  current_price: number;
  applicable_tax: number;
  rate_id: number;
  rate_validity: Date;
};

export type SellPrice = Omit<BuyPrice, "applicable_tax">;
