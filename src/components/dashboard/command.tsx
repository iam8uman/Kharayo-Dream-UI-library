"use client";

import * as React from "react";
import { CreditCard, Search, Settings, User } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "../ui/input";
import { navMenu } from "@/data/navMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CommandComponent() {
  const [open, setOpen] = React.useState(false);
  const itemRefs = React.useRef(
    navMenu.map(() => React.createRef<HTMLDivElement>())
  );
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="relative rounded-md w-96">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x rounded-md"></div>
        <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-md"></div>
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Press ⌘ + k to search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const firstResult = navMenu[0];
                if (firstResult) {
                  router.push(firstResult.href);
                  setOpen(false);
                }
              }
            }}
            className="rounded-md ring-transparent focus:border-none focus:outline-none appearance-none bg-transparent pl-8 shadow-none w-full placeholder:text-slate-500 focus:ring-transparent "
          />
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="cover bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 border-sky-900 border rounded-lg ">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {navMenu.map((item, index) => (
                <CommandItem key={item.label} ref={itemRefs.current[index]}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="w-full flex flex-row justify-start items-center "
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white rounded-md px-2 py-0.5 text-xs">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
}
