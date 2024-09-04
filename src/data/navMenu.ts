// navMenu.ts
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";

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
