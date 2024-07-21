import { BuyPrice, SellPrice } from "../../api/gold-price/types";

export type GoldValuesProp = {
  sellingData?: SellPrice;
  buyingData?: BuyPrice;
};
