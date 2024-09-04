// navMenu.ts
import { IconArrowRoundaboutLeft } from "@tabler/icons-react";
import { Home, ShoppingCart, Package, Users, LineChart, HeartOff, Contact2Icon } from "lucide-react";

export const navMenu = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/navbar",
    label: "Navbar",
    icon: ShoppingCart,
    badge: 6,
  },
  {
    href: "/dashboard/hero",
    label: "Hero",
    icon: HeartOff,
  },
  {
    href: "/dashboard/about",
    label: "About",
    icon: IconArrowRoundaboutLeft,
  },
  {
    href: "/dashboard/contact",
    label: "Contact",
    icon: Contact2Icon,
  },
  {
    href: "/dashboard/commands",
    label: "Commands",
    icon: ShoppingCart,
  },


  {
    href: "/dashboard/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/dashboard/customers",
    label: "Customers",
    icon: Users,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChart,
  },
];
