import { CartItem } from "@prisma/client";
import useSWR from "swr";
import axios from "axios";
const fetcher = async (url: string) => {
  return await axios.get<{ data: CartItem[] }>(url).then((res) => {
    return res.data.data;
  });
};

export function useCartItems() {
  const { data, error, isValidating } = useSWR("/api/cart", fetcher);
  return {
    cartItems: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
  };
}
