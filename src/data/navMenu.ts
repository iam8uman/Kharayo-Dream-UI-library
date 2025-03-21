// navMenu.ts
import {
  Home,
  SmilePlus,
  Package,
  LineChart,
  Contact2Icon,
  IndianRupee,
  ScanSearch,
  LayoutDashboard,
  Fingerprint,
  Component,
} from "lucide-react";

export const navMenu = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/navbar",
    label: "Navbar",
    icon: SmilePlus,
    badge: 6,
  },
  {
    href: "/dashboard/hero",
    label: "Hero",
    icon: LayoutDashboard,
    badge: 7,
  },
  {
    href: "/dashboard/pricing",
    label: "Pricing",
    icon: IndianRupee,
    badge: 1,
  },
  {
    href: "/dashboard/about",
    label: "About",
    icon: Fingerprint,
  },
  {
    href: "/dashboard/contact",
    label: "Contact",
    icon: Contact2Icon,
  },
  {
    href: "/dashboard/commands",
    label: "Commands",
    icon: ScanSearch,
  },

  {
    href: "/dashboard/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChart,
  },
  {
    href: "/dashboard/components",
    label: "Components",
    icon: Component,
    badge: "New",
  },
];
