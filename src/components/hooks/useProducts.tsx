import getProducts from "@/helpers/api/getProductsData";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useProducts = (type_key: string, slug: string) => {
  const { locale } = useRouter();

  return useQuery({
    queryKey: ["get-products"],
    queryFn: async () => getProducts(type_key, slug, locale as locale),
    staleTime: 60_000,
  });
};
