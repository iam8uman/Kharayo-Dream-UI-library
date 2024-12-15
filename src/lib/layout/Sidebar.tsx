"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Package2, X, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navMenu } from "@/data/navMenu"; // Adjust the import path as needed
import { cn } from "../utils";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Sidebar() {
  const currentPath = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`sticky top-0 bg-slate-300 dark:bg-black max-h-screen md:block ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b border-sky-800 px-4 lg:h-[60px]">
          <Link href="/" className="flex items-center font-semibold">
            {/* <Package2 className="h-6 w-6" /> */}
            <div
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-sky-500 text-2xl font-semibold flex justify-center items-center `}
            >
              <span className=" logo px-2 group slide-anime cursor-pointer ">
                <Image
                  height={400}
                  width={400}
                  src="/SUI.png"
                  className="rounded-3xl border w-8 h-8 scale-110 border-none"
                  alt="Company Logo"
                />
                <span className="sr-only">Company Logo</span>
              </span>
              <span className="uppercase">Kharayo</span>
            </div>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto h-8 w-8 p-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <HamburgerMenuIcon className="h-4 w-4" />
            ) : (
              <XIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <div className="flex-1">
          <ScrollArea className="h-full w-full border">
            <nav className="grid items-start text-sm font-medium">
              {navMenu.map((item) => {
                const Icon = item.icon;
                const isActive =
                  currentPath?.split("/")[2] === item.href?.split("/")[2];
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center text-[15px] gap-3 px-4 py-2 transition-all",
                      isActive
                        ? "bg-sky-500 text-black dark:text-white hover:bg-sky-500/90 hover:text-white"
                        : "text-muted-foreground dark:text-slate-500 hover:text-black hover:dark:text-white hover:translate-x-2",
                      ""
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className={`${isCollapsed ? "hidden" : "block"}`}>
                      {item.label}
                    </span>
                    {item.badge && !isCollapsed && (
                      <Badge className="ml-auto w-auto flex shrink-0 items-center justify-center rounded-full bg-slate-300 dark:text-black text-black border-black text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>
        </div>

        {!isCollapsed && (
          <div className="mt-auto p-1 justify-center items-center flex">
            <Card className="w-full justify-center items-center border-sky-500 flex-1">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock to get unlimited access
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white text-sm items-center justify-center"
                >
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
