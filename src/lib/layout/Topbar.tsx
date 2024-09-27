import React from "react";
import {
  Home,
  LineChart,
  Menu,
  Package2,
  Package2Icon,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CommandComponent from "@/components/dashboard/command";
import { TopbarClient } from "./TopbarClient";
import { navMenu } from "@/data/navMenu";

// Configuration
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Acme Inc";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/orders", icon: ShoppingCart, label: "Orders", badge: 6 },
  { href: "/products", icon: Package2Icon, label: "Products" },
  { href: "/customers", icon: Users, label: "Customers" },
  { href: "/analytics", icon: LineChart, label: "Analytics" },
];

const upgradeCard = {
  show: true,
  title: "Upgrade to Pro",
  description: "Unlock all features and get unlimited access to our support team.",
  buttonText: "Upgrade",
};

const dropdownMenuItems = [
  { label: "Settings", action: "settings" },
  { label: "Support", action: "support" },
];


export default async function Topbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();



  return (
    <header className="flex h-14 items-center gap-4 sticky top-0 border-b border-sky-800   bg-slate-300 dark:bg-slate-900 px-4 lg:h-[60px] lg:px-6 z-50">
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">{APP_NAME}</span>
            </Link>
            {navMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
                {item.badge && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
          {upgradeCard.show && (
            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>{upgradeCard.title}</CardTitle>
                  <CardDescription>{upgradeCard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    {upgradeCard.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </SheetContent>
      </Sheet> */}
      <div className="w-full flex-1">
        <CommandComponent />
      </div>
      <TopbarClient user={user} dropdownMenuItems={dropdownMenuItems} />
    </header>
  );
}