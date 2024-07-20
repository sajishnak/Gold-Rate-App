import { AxiosError } from "axios";
import { createQuery } from "react-query-kit";
import { client } from "../common";
import { SellPrice } from "./types";

export const useSellPrice = createQuery<SellPrice, null, AxiosError>({
  queryKey: ["sell-price"],
  fetcher: () => client.get("sell-price").then((response) => response.data),
});
