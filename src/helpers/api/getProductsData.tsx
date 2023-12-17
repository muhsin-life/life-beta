import axios from "axios";

export default async function getProducts(
  type_key: string,
  slug: string,
  locale: locale
) {
  const { data } = await axios.get(
    `https://${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/web/products?${type_key}=${slug}&order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=${locale}`
  );
  return data;
}
