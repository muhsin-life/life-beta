import { Icons } from "@/components/Icons";

export const NAVBAR_ITEMS = [
  {
    label: "Arabic",
    value: "current_lang" as const,
    icon: Icons.aeFlag,
  },
  {
    label: "Log in",
    value: "account" as const,
    icon: Icons.account,
  },
  {
    label: "Wishlist",
    value: "wishlist" as const,
    icon: Icons.wishlist,
  },
  {
    label: "Cart",
    value: "cart" as const,
    icon: Icons.cart,
  },
];

export const CATGEORY_ITEMS = ["BRANDS", "OFFERS", "HEALTH PACKAGES"];
