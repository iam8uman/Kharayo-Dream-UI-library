"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/dark-mode";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface TopbarClientProps {
  user: KindeUser | null;
  dropdownMenuItems: Array<{ label: string; action: string }>;
}

export function TopbarClient({ user, dropdownMenuItems }: TopbarClientProps) {
  const handleAction = (action: string) => {
    switch (action) {
      case "settings":
        console.log("Settings clicked");
        break;
      case "support":
        console.log("Support clicked");
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
  };

  return (
    <>
      <div>
        <ModeToggle />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            {user?.picture ? (
              <Image
                src={user.picture}
                alt={user.email || "User avatar"}
                width={32}
                height={32}
                className="rounded-full h-full w-full border-2 border-sky-500"
              />
            ) : (
              <CircleUser className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dropdownMenuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onSelect={() => handleAction(item.action)}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
