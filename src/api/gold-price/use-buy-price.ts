import { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { client } from "../common";
import { BuyPrice } from "./types";

export const useBuyPrice = createQuery<BuyPrice, null, AxiosError>({
  queryKey: ["buy-price"],
  fetcher: () => client.get("buy-price").then((response) => response.data),
});
